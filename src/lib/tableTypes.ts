import { Asset, NestedOwner } from "../api/api";

type ColumnId = "_id" | "assetName" | "owner.name" | "enriched.isCrownJewel";
export interface Column {
  id: ColumnId;
  label: string;
  minWidth?: number;
}

export const columns: readonly Column[] = [
  {
    id: "_id",
    label: "ID",
    minWidth: 170,
  },
  {
    id: "assetName",
    label: "Asset Name",
    minWidth: 100,
  },
  {
    id: "owner.name",
    label: "Owner Name",
    minWidth: 170,
  },
  {
    id: "enriched.isCrownJewel",
    label: "Is Crown Jewel",
    minWidth: 170,
  },
];

export const getColumnValue = (asset: Asset, path: string) => {
  if (
    path === "owner.name" &&
    (asset.owner as NestedOwner).owner !== undefined
  ) {
    return (asset.owner as NestedOwner).owner.name;
  }

  return path
    .split(".")
    .reduce((acc, key) => (acc as any)?.[key], asset) as any;
};
