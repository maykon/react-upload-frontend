import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  min-height: 0;
`;

export const Content = styled.div`
  flex-grow: 1;
  min-height: 0;
  max-height: 400px;
  overflow-y: auto;

  div {
    min-height: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;

    & + div {
      margin-top: 7px;
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Icons = styled.div`
  min-width: 60px;
`;

export const Preview = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 7px;
`;
