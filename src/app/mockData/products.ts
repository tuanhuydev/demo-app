export const mockData = [
  {
    id: 1,
    name: "Product line 1",
    imgSrc: require("@assets/images/products/drogas.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 3,
    name: "Product line 1.1",
    parentId: 1,
    imgSrc: require("@assets/images/products/drogas.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 2,
    name: "Product line 1.2",
    parentId: 1,
    imgSrc: require("@assets/images/products/drogas.png"),
    modules: "P2P",
    subModules: [],
    subFeatures: [],
    capability: "",
  },
  {
    id: 8,
    name: "Product line 1.3",
    parentId: 1,
    imgSrc: require("@assets/images/products/rossmann.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 7,
    name: "Product line 1.4",
    parentId: 1,
    imgSrc: require("@assets/images/products/savers.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 5,
    name: "Product line 1.2.1.1",
    parentId: 4,
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 6,
    name: "Product line 1.2.1.1.1",
    parentId: 5,
    imgSrc: require("@assets/images/products/drogas.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 9,
    name: "Product line 2",
    imgSrc: require("@assets/images/products/savers.png"),
    modules: "Modules 1",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 10,
    name: "Product line 3",
    imgSrc: require("@assets/images/products/superdrug.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 11,
    name: "Product line 4",
    imgSrc: require("@assets/images/products/trekpleister.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 12,
    name: "Product line 5",
    imgSrc: require("@assets/images/products/watsons.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 14,
    name: "Product line 6",
    imgSrc: require("@assets/images/products/watsonswine.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 13,
    name: "Replenishment Cycle",
    parentId: 11,
    imgSrc: require("@assets/images/products/mrjuicy.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 4,
    name: "Product line 1.2.1",
    parentId: 2,
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 15,
    name: "Product line 7",
    imgSrc: require("@assets/images/products/fusion.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 16,
    name: "Product line 8",
    imgSrc: require("@assets/images/products/great.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 17,
    name: "Product line 8.1",
    parentId: 16,
    imgSrc: require("@assets/images/products/watsonswine.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 20,
    name: "Product line 8.2",
    parentId: 16,
    imgSrc: require("@assets/images/products/taste.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 18,
    name: "Product line 9",
    imgSrc: require("@assets/images/products/great.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 19,
    name: "Product line 10",
    imgSrc: require("@assets/images/products/parknshop.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 21,
    name: "Product line 11",
    imgSrc: require("@assets/images/products/sunkist.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 22,
    name: "Product line 12",
    imgSrc: require("@assets/images/products/pns-yonghui.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
  },
  {
    id: 23,
    name: "Product line 1.2.2",
    imgSrc: require("@assets/images/products/pns-yonghui.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
    parentId: 2,
  },
  {
    id: 24,
    name: "Product line 1.2.1.2",
    imgSrc: require("@assets/images/products/parknshop.png"),
    modules: "Modules",
    subModules: ["Sub module 1", "Sub module 2", "Sub module 3"],
    subFeatures: ["Sub Feature 1", "Sub Feature 2", "Sub Feature 3"],
    capability: "Capabilites",
    parentId: 4,
  },
];
