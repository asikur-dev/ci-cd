module.exports = {
  apps: [
    {
      name: "my-node-app",
      script: "./index.js",
      env: {
        NODE_ENV: "production",
        PORT: 4000,
      },
      instances: "max",
      exec_mode: "cluster",
    },
  ],
};
