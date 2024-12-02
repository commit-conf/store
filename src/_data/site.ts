export interface Site {
  buildTime: Date;
  baseUrl: string;
  metaImage: string;
  productImageFolder: string;
  name: string;
  email: string;
  xAccount: string;
  youtubeChannel: string;
  environment: string;
}

export default {
  buildTime: new Date(),
  baseUrl: "https://store.commit-conf.com",
  metaImage: "https://store.commit-conf.com/img/square-head.jpg",
  productImageFolder: "/img/products",
  name: "Commit Store",
  email: "info@commit-conf.com",
  xAccount: "@commitconf",
  youtubeChannel: "UCd_1KHg4t2VKGsSDF8OD5Cw",
  environment: process.env.ENV || "prod",
} as Site