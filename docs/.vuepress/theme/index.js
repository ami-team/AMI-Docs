const { path } = require("@vuepress/utils");

module.exports = {
    name: "vuepress-theme-local",
    extends: "@vuepress/theme-default",
    alias: {
        "@theme/NavbarDropdown.vue": path.resolve(
            __dirname,
            "./components/AMINavbarDropdown.vue"
        ),
    },
};
