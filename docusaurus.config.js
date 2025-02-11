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
    image: 'img/favicon.png',
    navbar: {
      title: 'Platform Governance Research Docs',
      logo: {
        alt: 'Digital Research Lab Logo',
        src: 'img/favicon.png',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentation' },
        { href: 'https://truthmarket.com/', label: 'Website', position: 'left' },
        { href: 'https://github.com/VedantKejariwal/MVAh2hDocs', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Documentation', to: '/docs/intro' }],
        },
        {
          title: 'Publications',
          items: [
            { label: 'Free Speech & the Fake News Problem', href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4414261' },
            { label: 'Improving §230, Preserving Democracy & Protecting Free Speech', href: 'https://cacm.acm.org/opinion/improving-section-230-preserving-democracy-and-protecting-free-speech/' },
            { label: 'Truth is Warranted: The Impact of Self-Certification on Misinformation', href: 'https://www.dropbox.com/scl/fi/nopf4dhw86fh5oej7rquw/Certifiably_True-The_Impact_Of_Self_Certification_On_Misinfo.pdf?rlkey=vp9rcew7hq98plmhh5asofy93&e=1&dl=0' },
            { label: 'Secure Account Recovery for a Privacy-Preserving Web Service', href: 'https://www.usenix.org/system/files/usenixsecurity24-little.pdf' },
          ],
        },
        {
          title: 'More',
          items: [
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