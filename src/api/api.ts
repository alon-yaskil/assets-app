import mockAssets from "./mock.json";

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

export const getAssets = async (
  pageIndex: number,
  pageSize: number,
): Promise<AssetsResponse> => {
  await sleep(200);
  return {
    total: mockAssets.length,
    data: mockAssets.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize,
    ),
  };
};

export const putAssets = async (assets: Asset[]): Promise<void> => {
  await sleep(200);
  for (const asset of assets) {
    const index = mockAssets.findIndex((a) => a._id === asset._id);
    if (index === -1) {
      throw new Error("asset does not exist");
    }
    // write updates
  }
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
