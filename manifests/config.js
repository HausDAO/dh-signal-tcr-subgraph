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
        address: "0x99BaeA1bA7929380bd0022F5920293862b1195f7",
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
