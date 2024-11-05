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
              { text: "Design of TaskGraph", link: "/documentation/design" },
              { text: "Environment Setup", link: "/documentation/environment" },
              { text: "Backend Development", link: "/documentation/backend-development" },
              { text: "Backend APIs", link: "/documentation/backend-apis" },
              { text: "Backend Deployment", link: "/documentation/backend-deployment" },
              { text: "Frontend Development", link: "/documentation/frontend-development" },
              { text: "Frontend Deployment", link: "/documentation/frontend-deployment" },
              { text: "Static Content Hosting", link: "/documentation/static-content-hosting" },
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
