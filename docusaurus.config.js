// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

const config = {
  title: 'H2H Docs',
  tagline: 'Empirica Marketplace Simulation',
  favicon: 'img/favicon.ico',

  url: 'https://vedantkejariwal.github.io',
  baseUrl: '/MVAh2hDocs/',

  organizationName: 'VedantKejariwal', 
  projectName: 'MVAh2hDocs',  
  deploymentBranch: 'gh-pages', 

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/VedantKejariwal/MVAh2hDocs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/VedantKejariwal/MVAh2hDocs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'H2H Docs',
      logo: {
        alt: 'H2H Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/VedantKejariwal/MVAh2hDocs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Tutorial', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            { label: 'X', href: 'https://x.com/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/VedantKejariwal/MVAh2hDocs' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} H2H Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;