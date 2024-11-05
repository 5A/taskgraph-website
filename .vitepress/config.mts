import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TaskGraph",
  description: "A todolist app with graph structure.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "App", link: "https://app.taskgraph.org/" },
    ],

    sidebar: [
      {
        text: "Reference",
        items: [
          { text: "Getting Started", link: "/tutorial" },
          {
            text: "Documentation",
            items: [
              { text: "Overview", link: "/documentation/overview" },
              { text: "Environment", link: "/documentation/environment" },
              { text: "Backend", link: "/documentation/backend" },
              { text: "Frontend", link: "/documentation/frontend" },
              { text: "Static", link: "/documentation/static" },
            ],
          },
          { text: "Questions and Answers", link: "/faq" },
          { text: "Screenshots", link: "/screenshots" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/5A/taskgraph" }],
  },
});
