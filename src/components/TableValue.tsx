import { useCallback, useMemo } from "react";
import { Asset } from "../api/api";
import { Column } from "../lib/tableTypes";
import { getColumnValue, setColumnValue } from "../lib/utils";

interface Props {
  asset: Asset;
  editMode: boolean;
  column: Column;
  onUpdate: (updated: Asset) => void;
}

const TableValue = ({ asset, column, editMode, onUpdate }: Props) => {
  const value = useMemo(
    () => getColumnValue(asset, column.id),
    [asset, column],
  );

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = e.target.value;
      if (value === newValue) {
        return;
      }
      setColumnValue(asset, column.id, newValue);
      onUpdate({ ...asset });
    },
    [onUpdate],
  );
  return column.id === "enriched.isCrownJewel" ? (
    <select value={value.toString()} disabled={!editMode} onChange={onChange}>
      <option value={"true"}>True</option>
      <option value={"false"}>false</option>
    </select>
  ) : !value && typeof value !== "boolean" ? (
    "N/A"
  ) : (
    value.toString()
  );
};

export default TableValue;
