import React from "react";

import GlobalStyle from "./styles/global";
import { Container, Content, UploadSearch, TotalMemes } from "./styles";
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
        {!!filteredFiles.length && (
          <TotalMemes>
            Total de imagens: <span>{filteredFiles.length}</span>
          </TotalMemes>
        )}
      </Content>
      <GlobalStyle />
    </Container>
  );
}
