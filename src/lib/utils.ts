import { Asset, NestedOwner } from "../api/api";

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

export const setColumnValue = (
  asset: Asset,
  path: string,
  value: string | boolean | null
) => {
  if (
    path === "owner.name" &&
    (asset.owner as NestedOwner).owner !== undefined
  ) {
    (asset.owner as NestedOwner).owner.name = value as string;
    return;
  }

  const paths = path.split(".");
  let current = asset as any;

  for (let i = 0; i < paths.length - 1; i++) {
    const key = paths[i];
    if (!(key in current) || typeof current[key] !== "object") {
      current[key] = {};
    }
    current = current[key];
  }

  current[paths[paths.length - 1]] = value;
};

export const isAssetSame = (updated: any, source: any) => {
  if (updated === source) {
    return true;
  }
  if (Object.keys(updated).length !== Object.keys(source).length) {
    return false;
  }

  for (const key in updated) {
    if (!(key in source)) {
      return false;
    }
    if (!isAssetSame(updated[key], source[key])) {
      return false;
    }
  }

  return true;
};
