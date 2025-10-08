// docusaurus.config.js

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '命令面板文档',
  tagline: '命令面板文档',
  favicon: 'favicon.png',

  future: {
    v4: true,
  },

  url: 'https://docs.halogly.com',
  baseUrl: '/commandpanels/',

  organizationName: 'halogly',
  projectName: 'docs-commandpanels-v4-zh',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'CommandPanels Logo',
          src: 'logo.png',
        },
        items: [
          {
            type: 'html',
            position: 'right',
            value: `<a href="https://commandpanels.net" class="navbar__item" style="font-weight: bold;">返回首页</a>`,
          }
        ],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
        },
      },
      footer: {
        copyright: `
          Copyright © ${new Date().getFullYear()} Halogly - CommandPanels
          <div style="font-size: 0.9em; opacity: 0.8;">
            本文档为社区翻译版，非官方文档
          </div>
        `,
      },
    }),
};

export default config;
