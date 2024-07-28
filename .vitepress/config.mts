import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Hostactyl",
  description: "Hostactyl Dashboard Documentation for Pterodactyl Panel",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/Get-Started' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Get Started', link: '/Get-Started' },
          { text: 'Custom-Domain', link: '/domain' }
       ]
      },
      {
        text: 'More',
        items: [
          { text: 'Plans', link: '/plans' },
          { text: 'Eggs', link: '/eggs' },
          { text: 'Location', link: '/location' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HostactylDevelopment/' }
    ]
  }
})
