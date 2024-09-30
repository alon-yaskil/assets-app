import { TableCell } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Asset } from "../api/api";
import { columns } from "../lib/tableTypes";
import { StyledTableRow } from "../styles/assetsTable";
import TableValue from "./TableValue";

interface Props {
  originalAsset: Asset;
  editMode: boolean;
  onUpdate: (asset: Asset) => void;
  undoTs: number;
}

const AssetRow = ({ originalAsset, editMode, onUpdate, undoTs }: Props) => {
  const [asset, setAsset] = useState(originalAsset);
  const [dirty, setDirty] = useState(false);
  const onUpdateCallback = useCallback(
    (updatedAsset: Asset) => {
      setAsset({ ...updatedAsset });
      setDirty(true);
      onUpdate(updatedAsset);
    },
    [onUpdate]
  );

  useEffect(() => {
    setAsset({ ...originalAsset });
    setDirty(false);
  }, [undoTs]);
  useEffect(() => {
    setDirty(false);
  }, [editMode]);

  return (
    <>
      <StyledTableRow key={asset._id} $dirty={dirty}>
        {columns.map((column) => {
          return (
            <TableCell key={column.id}>
              <TableValue
                asset={asset}
                column={column}
                editMode={editMode}
                onUpdate={onUpdateCallback}
              />
            </TableCell>
          );
        })}
      </StyledTableRow>
    </>
  );
};

export default AssetRow;
