import { TableCell, TableRow } from "@mui/material";
import { useCallback, useState } from "react";
import { Asset } from "../api/api";
import { columns } from "../lib/tableTypes";
import TableValue from "./TableValue";

interface Props {
  originalAsset: Asset;
  editMode: boolean;
  onUpdate: (asset: Asset) => void;
}

const AssetRow = ({ originalAsset, editMode, onUpdate }: Props) => {
  const [asset, setAsset] = useState(originalAsset);
  const onUpdateCallback = useCallback(
    (updatedAsset: Asset) => {
      setAsset({ ...updatedAsset });
      onUpdate(updatedAsset);
    },
    [onUpdate]
  );
  return (
    <>
      <TableRow key={asset._id}>
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
      </TableRow>
    </>
  );
};

export default AssetRow;
