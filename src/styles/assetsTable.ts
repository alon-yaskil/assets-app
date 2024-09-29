import { Table, TableRow } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  margin: 16px 24px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: calc(100% - 48px);
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
export const SaveUndoButton = styled.button`
  &:hover {
    cursor: pointer;
  }
  border: none;
  margin: 0 10px;
`;

export const StyledTable = styled(Table)`
  width: 100%;

  overflow: scroll;
`;
export const StyledTableRow = styled(TableRow)<{ dirty: boolean }>`
  background-color: ${({ dirty }) =>
    dirty ? "var(--updated-background)" : "none"};
`;
