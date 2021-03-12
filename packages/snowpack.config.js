// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/build",
  },
  plugins: [
    ["@snowpack/plugin-react-refresh"],
    ["@snowpack/plugin-babel"],
    ["@snowpack/plugin-dotenv"],
    [
      "snowpack-plugin-replace",
      {
        list: [
          {
            from: "process.env",
            to: "import.meta.env",
          },
        ],
      },
    ],
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  packageOptions: {
    knownEntrypoints: ["react/jsx-runtime"],
  },
  devOptions: {
    port: 3000,
    open: "chrome",
    hmr: true,
  },
  routes: [{ src: ".*", dest: "index.html", match: "routes" }],
};
