import React from "react";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";
import Upload from "./components/Upload";
import FileList from "./components/FileList";
import useUploadFiles from "./hooks/UploadFiles";

export default function App() {
  const [uploadedFiles, OnHandleUpload, OnHandleDelete] = useUploadFiles();

  return (
    <Container>
      <Content>
        <Upload onUpload={OnHandleUpload} />
        {!!uploadedFiles.length && (
          <FileList files={uploadedFiles} OnDelete={OnHandleDelete} />
        )}
      </Content>
      <GlobalStyle />
    </Container>
  );
}
