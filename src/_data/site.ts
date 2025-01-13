export interface Site {
  buildTime: Date;
  baseUrl: string;
  metaImage: string;
  productImageFolder: string;
  name: string;
  email: string;
  xAccount: string;
  youtubeChannel: string;
  koliseoUrl: string
  environment?: string;
  // add environment properties here and on the .env files
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
  koliseoUrl: 'https://koliseo.com/commit/store/tickets',
  environment: process.env.ENV || "production",
};

export default site;