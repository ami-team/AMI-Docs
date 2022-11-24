import { viteBundler } from "vuepress";
import { localTheme } from "./theme";

export default {
    theme: localTheme({
        docsDir: "docs",
        logo: "https://ami.in2p3.fr/images/logo.png",
        navbar: [
            {
                text: "Technical Guide",
                children: [
                    {
                        text: "AMI Web Framework",
                        link: "/docs/ami-web-framework/",
                        activeMatch: "/docs/ami-web-framework/",
                    },
                    {
                        text: "AMI Server",
                        link: "/docs/ami-server",
                        activeMatch: "/docs/ami-server/",
                    },
                ],
            },
			{
				text: "Concepts",
				children: [
					{
						text: "MQL",
						link: "/concepts/mql",
						activeMatch: "/concepts/mql",
					},
				],
			},
            // {
            //     text: "User guide",
            //     children: [
            //         {
            //             text: "PyAMI",
            //             link: "/user-guide/pyami",
            //             activeMatch: "/user-guide/pyami",
            //         },
            //     ],
            // },
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
                    "/docs/ami-web-framework": [
                        {
                            text: "Guide",
                            children: ["/docs/ami-web-framework/README.md"],
                        },
                        {
                            text: "Essentials",
                            children: [
                                "/docs/ami-web-framework/how-to-install.md",
                                "/docs/ami-web-framework/generate-homepage.md",
                                "/docs/ami-web-framework/generate-subapp.md",
                                "/docs/ami-web-framework/generate-control.md",
                            ],
                        },
                        {
                            text: "Advanced Concepts",
                            children: [
                                "/docs/ami-web-framework/lifecycle.md",
                                "/docs/ami-web-framework/using-code-mirror-with-ami.md",
                                "/docs/ami-web-framework/api-reference.md",
                            ],
                        },
                        {
                            text: "Deployment",
                            children: ["/docs/ami-web-framework/docker.md"],
                        },
                    ],
                    "/docs/ami-server": [
                        {
                            text: "Getting started",
                            children: [
                                "/docs/ami-server/README.md",
                                "/docs/ami-server/installation.md",
                            ],
                        },
                    ],
                    "/concepts/mql": [
                        {
                            text: "Guide",
                            children: ["/concepts/mql/README.md"],
                        },
                    ],
                },
                sidebarDepth: 2,
            },
        },
    }),
    bundler: viteBundler({
        vuePluginOptions: {
            template: {
                compilerOptions: {
                    isCustomElement: (tag) => tag === "center",
                },
            },
        },
    }),
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
        ["link", { rel: "manifest", href: "/ami-docs/manifest.webmanifest" }],
    ],
    locales: {
        "/": {
            lang: "en-US",
            title: "Documentation",
            description: "The official documentation for the AMI Web Framework",
        },
    },
};
