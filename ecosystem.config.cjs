module.exports = {
  apps: [
    {
      name: "Five Chicken",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
    },
  ],
};
