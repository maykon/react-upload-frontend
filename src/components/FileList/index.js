import React from "react";

import { Container, Content, FileInfo, Preview, Icons } from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";

export default function FileList({ files, OnDelete }) {
  return (
    <Container>
      <Content>
        {files.map(uploadedFile => (
          <div key={uploadedFile.id}>
            <FileInfo>
              <Preview src={uploadedFile.preview} />
              <div>
                <strong>{uploadedFile.name}</strong>
                <span>
                  {uploadedFile.readableSize}
                  {uploadedFile.url && (
                    <button onClick={() => OnDelete(uploadedFile.id)}>
                      Excluir
                    </button>
                  )}
                </span>
              </div>
            </FileInfo>

            <Icons>
              {!uploadedFile.uploaded && !uploadedFile.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 24 },
                    path: { stroke: "#7159c1" }
                  }}
                  strokeWidth={10}
                  value={uploadedFile.progress}
                />
              )}

              {uploadedFile.url && (
                <a
                  href={uploadedFile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MdLink style={{ marginLeft: 8 }} size={24} color="#222" />
                </a>
              )}

              {uploadedFile.uploaded && (
                <MdCheckCircle size={24} color="#78e5d5" />
              )}
              {uploadedFile.error && <MdError size={24} color="#e57878" />}
            </Icons>
          </div>
        ))}
      </Content>
    </Container>
  );
}
