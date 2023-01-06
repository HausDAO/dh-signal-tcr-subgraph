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
        address: "0x22cB70eB78a2956d87231A36943d5e5F32b68192",
        startBlock: 8262213,
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
