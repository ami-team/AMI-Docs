module.exports = {
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
                            '/documentation/getting-started.md',
                        ],
                    },
                ],
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
            }
        }
    }
}