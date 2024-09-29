import { Asset } from "../api/api"

export interface Column {
    id: "_id" | "assetName" | "owner.name" | "enriched.isCrownJewel"
    label: string
    minWidth?: number
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
]

export const getColumnValue = (obj: Asset, path: string) =>
    path.split(".").reduce((acc, key) => (acc as any)?.[key], obj) as any
