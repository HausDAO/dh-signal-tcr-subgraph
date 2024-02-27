module.exports.config = {
  mainnet: {
    dataSources: [
      {
        name: "tcrSummoner",
        template: "tcr-summoner-ds.yaml",
        address: "0x8E7d5b1EB2d2d212574eF363168e5B2ba750b20e",
        startBlock: 16491825,
      },
    ],
    templates: [
      {
        name: "tcrTemplate",
        template: "tcr-template.yaml",
      },
    ],
  },
  goerli: {
    dataSources: [
      {
        name: "tcrSummoner",
        template: "tcr-summoner-ds.yaml",
        address: "0x017eD0e82bCD242C7Cd89F02c2Eee9826BEaBC67",
        startBlock: 8336292,
      },
    ],
    templates: [
      {
        name: "tcrTemplate",
        template: "tcr-template.yaml",
      },
    ],
  },
  sepolia: {
    dataSources: [
      {
        name: "tcrSummoner",
        template: "tcr-summoner-ds.yaml",
        address: "0x763b61A62EF076ad960E1d513713B2aeD7C1b88e",
        startBlock: 5369416,
      },
    ],
    templates: [
      {
        name: "tcrTemplate",
        template: "tcr-template.yaml",
      },
    ],
  },
  xdai: {
    dataSources: [
      {
        name: "tcrSummoner",
        template: "tcr-summoner-ds.yaml",
        address: "0x3F0443a6985b0AB585D376cC84f6d42e74A3e1F1",
        startBlock: 26229426,
      },
    ],
    templates: [
      {
        name: "tcrTemplate",
        template: "tcr-template.yaml",
      },
    ],
  },
};
