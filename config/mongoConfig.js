let mongoConfig = {
  server: {
    reconnectTries: Number.MAX_VALUE,
    auto_reconnect: true
  },
  mongoDbUri: "mongodb://admin:132435@ds133961.mlab.com:33961/todo-react"
};

module.exports = mongoConfig;