import type { Theme } from "@vuepress/core";
import { defaultTheme } from "@vuepress/theme-default";
import type { DefaultThemeOptions } from "@vuepress/theme-default";

const localTheme = (options: DefaultThemeOptions): Theme => {
    return {
        name: "vuepress-theme-local",
        extends: defaultTheme(options),
    };
};

module.exports = { localTheme };
