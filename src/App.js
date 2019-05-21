import React from "react";

import GlobalStyle from "./styles/global";
import {
  Container,
  Content,
  UploadSearch,
  TitleApp,
  TotalMemes
} from "./styles";
import Upload from "./components/Upload";
import FileList from "./components/FileList";
import useUploadFiles from "./hooks/UploadFiles";

export default function App() {
  const {
    filteredFiles,
    search,
    OnHandleFilter,
    OnHandleUpload,
    OnHandleDelete,
    OnNameChange
  } = useUploadFiles();

  return (
    <Container>
      <Content>
        <TitleApp>Meme uploader</TitleApp>
        <Upload onUpload={OnHandleUpload} />
        <form>
          <UploadSearch onChange={OnHandleFilter} value={search} />
        </form>
        {!!filteredFiles.length && (
          <FileList
            files={filteredFiles}
            OnNameChange={OnNameChange}
            OnDelete={OnHandleDelete}
          />
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
