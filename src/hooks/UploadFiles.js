import { useEffect, useReducer } from "react";

import fileReducer from "../reducers/File";
import { uniqueId } from "lodash";
import filesize from "filesize";
import api from "../services/api";

export default function useUploadFiles() {
  const [uploadedFiles, dispatch] = useReducer(fileReducer, []);

  useEffect(() => {
    async function loadFiles() {
      const files = await api.get("/posts");
      const fileUploads = files.data.map(file => ({
        id: file._id,
        name: file.name,
        readableSize: filesize(file.size),
        preview: file.url,
        progress: 100,
        uploaded: true,
        error: false,
        url: file.url
      }));
      dispatch({ type: "add", payload: fileUploads });
    }
    loadFiles();
  }, []);

  const OnHandleUpload = files => {
    const upFiles = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null
    }));

    dispatch({ type: "add", payload: upFiles });
    upFiles.forEach(processUpload);
  };

  const processUpload = uploadedFile => {
    const data = new FormData();
    data.append("file", uploadedFile.file, uploadedFile.name);

    api
      .post("/posts", data, {
        onUploadProgress: e => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));
          const payload = { progress };
          dispatch({ type: "update", id: uploadedFile.id, payload });
        }
      })
      .then(response => {
        const payload = {
          uploaded: true,
          id: response.data._id,
          url: response.data.url
        };
        dispatch({ type: "update", id: uploadedFile.id, payload });
      })
      .catch(err => {
        const payload = { error: true };
        dispatch({ type: "update", id: uploadedFile.id, payload });
      });
  };

  const OnHandleDelete = async id => {
    await api.delete(`/posts/${id}`);
    dispatch({ type: "delete", id });
  };

  return [uploadedFiles, OnHandleUpload, OnHandleDelete];
}
