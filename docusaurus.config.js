// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ParaRuby',
  tagline: 'Paradigms of Ruby: A Guide to Object-Oriented Programming',
  url: 'https://davidteren.github.io/',
  baseUrl: '/para_ruby',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'davidteren', // Usually your GitHub org/user name.
  projectName: 'para_ruby', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ParaRuby',
        // logo: {
        //   alt: 'ParaRuby Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Paradigms of Ruby',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/davidteren/para_ruby',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'Paradigms of Ruby',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'David Teren Socials',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/davidteren',
          //     },
          //     {
          //       label: 'LinkedIn',
          //       href: 'https://www.linkedin.com/in/davidteren/',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/davidteren/para_ruby',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ParaRuby. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby'],
      },
    }),
};

module.exports = config;
