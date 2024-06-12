interface AppConfig {
  serverURL: string;
  // Add other properties as needed
}

let config: AppConfig;

if (process.env.NODE_ENV === "production") {
  config = require("./config.prod").default;
} else if (process.env.NODE_ENV === "development") {
  config = require("./config.local").default;
} else {
  config = require("./config.local").default;
}

export default config;
