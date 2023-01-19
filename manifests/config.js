module.exports.config = {
  mainnet: {
    dataSources: [],
    templates: [],
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
  xdai: {},
};
