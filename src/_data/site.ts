export interface Site {
  buildTime: Date;
  baseUrl: string;
  metaImage: string;
  productImageFolder: string;
  name: string;
  email: string;
  xAccount: string;
  youtubeChannel: string;
  environment?: string;
  TSHIRT_2025_MALE_STRIPE_URL: string;
  TSHIRT_2025_FEMALE_STRIPE_URL: string;
  TSHIRT_2025_KIDS_STRIPE_URL: string;
  TSHIRT_2025_BODY_STRIPE_URL: string;
  TSHIRT_STAFF_MALE_STRIPE_URL: string;
  TSHIRT_STAFF_FEMLAE_STRIPE_URL: string;
  TSHIRT_STAFF_KIDS_STRIPE_URL: string;
  TSHIRT_STAFF_BODY_STRIPE_URL: string;
  CUP_2025_STRIPE_URL: string;
  STICKERS_PACK_1_STRIPE_URL: string;
}

const site: Site = {
  buildTime: new Date(),
  baseUrl: "https://store.commit-conf.com",
  metaImage: "https://store.commit-conf.com/img/square-head.jpg",
  productImageFolder: "/img/products",
  name: "Commit Store",
  email: "info@commit-conf.com",
  xAccount: "@commitconf",
  youtubeChannel: "UCd_1KHg4t2VKGsSDF8OD5Cw",
  environment: process.env.ENV || "production",
  TSHIRT_2025_MALE_STRIPE_URL: process.env.TSHIRT_2025_MALE_STRIPE_URL || "",
  TSHIRT_2025_FEMALE_STRIPE_URL: process.env.TSHIRT_2025_FEMALE_STRIPE_URL || "",
  TSHIRT_2025_KIDS_STRIPE_URL: process.env.TSHIRT_2025_KIDS_STRIPE_URL || "",
  TSHIRT_2025_BODY_STRIPE_URL: process.env.TSHIRT_2025_BODY_STRIPE_URL || "",
  TSHIRT_STAFF_MALE_STRIPE_URL: process.env.TSHIRT_STAFF_MALE_STRIPE_URL || "",
  TSHIRT_STAFF_FEMLAE_STRIPE_URL: process.env.TSHIRT_STAFF_FEMLAE_STRIPE_URL || "",
  TSHIRT_STAFF_KIDS_STRIPE_URL: process.env.TSHIRT_STAFF_KIDS_STRIPE_URL || "",
  TSHIRT_STAFF_BODY_STRIPE_URL: process.env.TSHIRT_STAFF_BODY_STRIPE_URL || "",
  CUP_2025_STRIPE_URL: process.env.CUP_2025_STRIPE_URL || "",
  STICKERS_PACK_1_STRIPE_URL: process.env.STICKERS_PACK_1_STRIPE_URL || "",
};

export default site;