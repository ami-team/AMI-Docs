const { path } = require("@vuepress/utils");

module.exports = {
    base: "/ami-docs/",
    theme: path.resolve(__dirname, "./theme"),
    dest: "public",
    head: [
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: `/ami-docs/images/icons/favicon-16x16.png`,
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: `/ami-docs/images/icons/favicon-32x32.png`,
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap",
            },
        ],
        ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ],
    locales: {
        "/": {
            lang: "en-US",
            title: "Documentation",
            description: "The official documentation for the AMI Web Framework",
        },
    },

    themeConfig: {
        docsDir: "docs",
        logo: "https://ami.in2p3.fr/images/logo.png",
        navbar: [
            {
                text: "Docs",
                link: "/docs/",
            },
            {
                text: "Projects",
                children: [
                    {
                        text: "AMI Web Framework",
                        icon: "https://cdn-icons-png.flaticon.com/512/246/246704.png",
                        link: "/docs/ami-web-framework",
                    },
                    {
                        text: "Active on /foo/",
                        link: "/not-foo/",
                    },
                    {
                        text: "Test",
                        link: "add",
                    },
                ],
            },
            {
                text: "Concepts",
                link: "/concepts/",
            },
            {
                text: "User guide",
                link: "/user-guide/",
            },
            {
                text: "Github",
                link: "https://github.com/ami-team/AMI-Docs",
            },
        ],
        locales: {
            "/": {
                selectText: "Languages",
                label: "English",
                ariaLabel: "Languages",
                editLinkText: "Edit this page on GitHub",
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh",
                    },
                },
                sidebar: {
                    "/docs/": [
                        {
                            text: "Guide",
                            children: ["/docs/README.md"],
                        },
                        {
                            text: "Getting started",
                            children: [
                                "/docs/how-to-install.md",
                                "/docs/generate-homepage.md",
                                "/docs/generate-subapp.md",
                                "/docs/generate-control.md",
                            ],
                        },
                    ],
                    "/docs/ami-web-framework": [
                        {
                            text: "Palalala",
                            children: ["/docs/ami-web-framework/README.md"],
                        },
                    ],
                    "/concepts/": [
                        {
                            text: "Guide",
                            children: ["/concepts/README.md"],
                        },
                        {
                            text: "test",
                            children: ["/concepts/test.md"],
                        },
                    ],
                },
                sidebarDepth: 0,
            },
        },
    },
};
