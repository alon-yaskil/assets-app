import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const Buttons = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: end;
`;
export const EditButton = styled.button<{ editMode: boolean }>`
  &:hover {
    cursor: pointer;
  }
  border: ${({ editMode }) =>
    editMode ? "1px solid black" : "1px solid var(--app-background)"};
`;
export const SaveButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  border: none;
  margin: 0 10px;
`;
