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
  pageSize: number
): Promise<AssetsResponse> => {
  await sleep(300);
  return {
    total: mockAssets.length,
    data: mockAssets.slice(
      pageIndex * pageSize,
      pageIndex * pageSize + pageSize
    ),
  };
};

const mockAssets = [
  {
    _id: "ff4a61f36fc2b5a6fc54233fb7f19cb3",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "tf-instance-SAP-app PROD",
    owner: {
      name: "David",
    },
  },
  {
    _id: "fedd9348f0c09ff9e72017edd418d63d",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "tf-instance-jhon-DEV",
    owner: {
      owner: {
        name: "William",
      },
    },
  },
  {
    _id: "ff444dd74b30d8f42d96a4993b91053b",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "iamrole-ella-PROD",
    owner: {
      name: "John",
    },
  },
  {
    _id: "ff27e3a865b36db6c5536b02ddba7e56",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "default",
    owner: {
      owner: {
        name: "William",
      },
    },
  },
  {
    _id: "fe8b96d0fb2d516e2e5220684e7d7fae",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "default",
    owner: {
      owner: {
        name: null,
      },
    },
  },
  {
    _id: "fe17ffc3857409554d426a7d9e2c4477",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "tf-lambda_Pricing DEV",
    owner: {
      name: "Jack",
    },
  },
  {
    _id: "fe0e4d23d1b2506c612cc60e64eddc42",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "iampolicy-sharon-PROD",
    owner: {
      name: "Thomas",
    },
  },
  {
    _id: "fe03ec0a47de2190b986aa3bc31d7013",
    enriched: {
      isCrownJewel: true,
    },
    assetName: "volume_Customer PROD",
    owner: {
      name: "Thomas",
    },
  },
  {
    _id: "fde2f8151de5414d753346d495023c63",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "iamgroup-HR-app PROD",
    owner: {
      name: "Charles",
    },
  },
  {
    _id: "fcef99c17446557eeb8218839af3c039",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "volume-ML-app PROD",
    owner: {
      name: "Michael",
    },
  },
  {
    _id: "a4b239d0e0f948b8f6bc79a6e1d4f509",
    enriched: {
      isCrownJewel: true,
    },
    assetName: "db-instance-SQL-prod",
    owner: {
      name: "Sarah",
    },
  },
  {
    _id: "b5e13fa6c9a64460a4db06d5bf00337f",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "web-app-frontend-prod",
    owner: {
      name: "Michael",
    },
  },
  {
    _id: "c6f73a573a6e4a5696f69de3472e11d2",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "api-gateway-instance-prod",
    owner: {
      name: "Jessica",
    },
  },
  {
    _id: "e5d14f9823e84a82bf2f59c3b6d9ec85",
    enriched: {
      isCrownJewel: true,
    },
    assetName: "cloud-storage-main-bucket",
    owner: {
      name: "Chris",
    },
  },
  {
    _id: "f7a842c10f6248b9b12934db90b6b3ad",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "analytics-service-prod",
    owner: {
      name: "Anna",
    },
  },
  {
    _id: "a4c84758f93b4f75bb3f29df7f9eb3b0",
    enriched: {
      isCrownJewel: true,
    },
    assetName: "db-instance-MongoDB-prod",
    owner: {
      name: "John",
    },
  },
  {
    _id: "b2a67d16edab4fbb9371d4e4382b97c4",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "load-balancer-prod",
    owner: {
      name: null,
    },
  },
  {
    _id: "c3c21b8373b342048091836fb4883a67",
    enriched: {
      isCrownJewel: true,
    },
    assetName: "cache-redis-instance-prod",
    owner: {
      name: null,
    },
  },
  {
    _id: "d4f98a46b8af4c01895f12cb7ab7f29d",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "auth-service-prod",
    owner: {
      name: "Sophia",
    },
  },
  {
    _id: "e59132af9b0e4e26b2f12a4b1fcf6137",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "network-firewall-prod",
    owner: {
      name: "James",
    },
  },
  {
    _id: "f6a83b1a11b44a66ae7e1f9c89b1f66c",
    enriched: {
      isCrownJewel: true,
    },
    assetName: "email-service-prod",
    owner: {
      name: "Daniel",
    },
  },
  {
    _id: "g7c842b10f824ab6c134cbabaf8c4f19",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "payment-gateway-prod",
    owner: {
      name: "Olivia",
    },
  },
  {
    _id: "h8a9f1e0287b489ea5e24c0731f4e003",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "web-app-backend-prod",
    owner: {
      name: "Lucas",
    },
  },
  {
    _id: "i9e12a79b9b94c73ae8e9e5bfc6351f3",
    enriched: {
      isCrownJewel: true,
    },
    assetName: "data-warehouse-service-prod",
    owner: {
      name: "Emma",
    },
  },
  {
    _id: "j6b5a0b64c4e4d32af5f06f2d9f729e7",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "cdn-service-prod",
    owner: {
      name: "Liam",
    },
  },
  {
    _id: "k8f0b1d4295d439bb7f2b1f6b6b5e3a6",
    enriched: {
      isCrownJewel: false,
    },
    assetName: "monitoring-dashboard-prod",
    owner: {
      name: "Grace",
    },
  },
];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
