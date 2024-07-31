import { defineConfig } from 'vitepress'

// https://hostactylsystems.tech
export default defineConfig({
  title: "Hostactyl",
  description: "Hostactyl Documentation",
  themeConfig: {
    // https://hostactylsystems.tech/theme-config.yml
    search: {
      provider: 'local'
    },
    nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Documentation', link: '/hfp-introduction' },
    //   { text: 'Report a Bug', link: 'https://discord.gg/Q9YfdZNN' }
    ],
    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2024 Hostactyl Development & all the Contributors. Made with Vitepress!'
    },

    sidebar: [
      {
        text: 'Docs For Pterodactyl',
        collapsed: false,
        items: [
          { text: 'Hostactyl Introduction', link: '/hfp-introduction' },
          { text: 'Hostactyl Dependiencies', link: '/hfp-dependiencies' },
          { text: 'Hostactyl Installation', link: '/hfp-installation' },
          { text: 'Custom Domain', link: '/hfp-domain' },
        ]
      },
      {
        text: 'Extra',
        collapsed: false,
        items: [
          { text: 'Plans', link: '/plans' },
          { text: 'Egg', link: '/eggs' },
          { text: 'Location', link: '/location' },
        ]
      },
      {
        text: 'Docs For Skyport',
        collapsed: false,
        items: [
          { text: 'Hostactyl Introduction', link: '/hfs-introduction' },
          { text: 'Hostactyl Dependiencies', link: '/hfs-dependiencies' },
          { text: 'Hostactyl Installation', link: '/hfs-installation' },
          { text: 'Custom Domain', link: '/hfs-domain' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HostactylDevelopment/' }
    ]
  }
})
