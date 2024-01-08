module.exports = {
  apps: [
    {
      name: "Le Maharaja",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
