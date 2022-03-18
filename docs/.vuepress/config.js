module.exports = {
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                href: `/images/icons/favicon-16x16.png`,
            },
        ],
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                href: `/images/icons/favicon-32x32.png`,
            },
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap'
            }
        ],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ],
    locales: {
        '/': {
            lang: 'en-US',
            title: 'Documentation',
            description: 'The official documentation for the AMI Web Framework',
        },
        '/fr/': {
            lang: 'fr-FR',
            title: 'Documentation',
            description: 'La documentation officielle du Framework Web AMI',
        },
    },

    themeConfig: {
        logo: 'https://ami.in2p3.fr/images/logo.png',
        navbar: [
            {
                text: 'Getting started',
                link: '/documentation/'
            },
            {
                text: 'API',
                children: [
                    {
                        text: 'Always active',
                        link: '/',
                        activeMatch: '/',
                    },
                    {
                        text: 'Active on /foo/',
                        link: '/not-foo/',
                        activeMatch: '^/foo/',
                    },
                ],
            },
        ],
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                ariaLabel: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                sidebar: [
                    {
                        text: 'Guide',
                        children: [
                            '/documentation/README.md',
                        ],
                    },
                    {
                        text: 'Getting started',
                        children: [
                            '/documentation/getting-started/how-to-install.md',
                            '/documentation/getting-started/generate-homepage.md',
                            '/documentation/getting-started/generate-subapp.md',
                            '/documentation/getting-started/generate-control.md',
                        ],
                    },
                ],
                sidebarDepth: 0
            },
            '/fr/': {
                selectLanguageName: 'Français',
                selectLanguageText: 'Langages',
                editLinkText: 'Apportez des modifications à cette page sur Github',
                serviceWorker: {
                    updatePopup: {
                        message: "Des modifications du contenu ont eu lieu",
                        buttonText: "Rafraichir"
                    }
                },
                backToHome: "Retourner à l'accueil"
            }
        }
    }
}