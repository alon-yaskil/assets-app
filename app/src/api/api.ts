export interface Owner {
  name: string | null;
}
export interface NestedOwner {
  owner: Owner;
}
export interface Asset {
  _id: string;
  enriched: {
    isCrownJewel: boolean;
  };
  assetName: string;
  owner: Owner | NestedOwner;
}
export interface AssetsResponse {
  total: number;
  data: Asset[];
}

// const baseUrl = (process).env.REACT_APP_API_URL

export const getAssets = async (
  pageIndex: number,
  pageSize: number,
): Promise<AssetsResponse> => {
  const response = await fetch(
    `http://localhost:3000/assets?pageSize=${pageSize}&pageIndex=${pageIndex}`,
  );
  if (!response.ok) {
    throw new Error("failed to fetch assets");
  }
  return await response.json();
};

export const updateAssets = async (assets: Asset[]): Promise<void> => {
  const response = await fetch(`http://localhost:3000/assets`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(assets),
  });
  if (!response.ok) {
    throw new Error("failed to update");
  }
};
