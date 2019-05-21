import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  min-height: 0;
  margin: 30px;
  background: #fff;
  border-radius: 4px;
  padding: 15px;
`;

export const UploadSearch = styled.input.attrs({
  type: "text",
  placeholder: "Search"
})`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 7px;
  padding: 2px;
`;
