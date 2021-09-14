const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Adri",
        mongodb_password: "Contra123",
        mongodb_clustername: "nextjscluster",
        mongodb_database: "meetups-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Adri",
      mongodb_password: "Contra123",
      mongodb_clustername: "nextjscluster",
      mongodb_database: "meetups",
    },
  };
};
