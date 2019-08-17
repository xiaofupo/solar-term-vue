const path = require("path");

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://localhost:9000",
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src/"),
                "components": path.resolve(__dirname, "./src/components"),
                "router": path.resolve(__dirname, "./src/router"),
                "store": path.resolve(__dirname, "./src/store"),
                "util": path.resolve(__dirname, "./src/util"),
                "pages": path.resolve(__dirname, "./src/pages"),
            }
        }
    }
};
