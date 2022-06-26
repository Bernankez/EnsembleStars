import { DefaultTheme, SiteData } from "vitepress";

export default <SiteData<DefaultTheme.Config>>{
  lang: "zh-CN",
  title: "EnsembleStarsUI",
  description: "just playing around",
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: "Guide", link: "/guide", activeMatch: "/item-1/" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          {
            text: "Section A Title",
            items: [{ text: "Section A Item A", link: "/section-A" }],
          },
        ],
      },
      { text: "Changelog", link: "https://github.com/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/bernankez" },
      { icon: "twitter", link: "https://twitter.com" },
    ],
    sidebar: [
      {
        text: "Guide",
        collapsible: true,
        // collapsed: true,
        items: [
          // refer to /guide/index.md
          { text: "Guide", link: "/guide/" },
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
    ],
  },
};
