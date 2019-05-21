import React from "react";

import GlobalStyle from "./styles/global";
import { Container, Content, UploadSearch } from "./styles";
import Upload from "./components/Upload";
import FileList from "./components/FileList";
import useUploadFiles from "./hooks/UploadFiles";

export default function App() {
  const {
    filteredFiles,
    search,
    OnHandleFilter,
    OnHandleUpload,
    OnHandleDelete
  } = useUploadFiles();

  return (
    <Container>
      <Content>
        <Upload onUpload={OnHandleUpload} />
        <form>
          <UploadSearch onChange={OnHandleFilter} value={search} />
        </form>
        {!!filteredFiles.length && (
          <FileList files={filteredFiles} OnDelete={OnHandleDelete} />
        )}
      </Content>
      <GlobalStyle />
    </Container>
  );
}
