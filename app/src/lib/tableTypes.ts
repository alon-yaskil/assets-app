type ColumnId = "_id" | "assetName" | "owner.name" | "enriched.isCrownJewel";
export interface Column {
  id: ColumnId;
  label: string;
  minWidth?: number;
  editable: boolean;
}

export const columns: readonly Column[] = [
  {
    id: "_id",
    label: "ID",
    minWidth: 170,
    editable: false,
  },
  {
    id: "assetName",
    label: "Asset Name",
    minWidth: 100,
    editable: false,
  },
  {
    id: "owner.name",
    label: "Owner Name",
    minWidth: 170,
    editable: false,
  },
  {
    id: "enriched.isCrownJewel",
    label: "Is Crown Jewel",
    minWidth: 170,
    editable: true,
  },
];
