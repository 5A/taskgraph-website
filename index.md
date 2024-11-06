---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TaskGraph"
  text: "A todolist app with graph structure."
  tagline: Open source, self hosted, and decentralized
  image:
    src: index-hero-image.png
    alt: TaskGraph
  actions:
    # - theme: brand
    #   text: Live Demo
    #   link: https://demo.taskgraph.org
    - theme: brand
      text: Get Started
      link: /tutorial
    - theme: alt
      text: Documentation
      link: /documentation/overview
    - theme: alt
      text: Screenshots
      link: /screenshots

features:
  - title: Private and Secure
    details: The program is self-hosted. Everything is stored in your own device and your own server. Industrial-standard encrytion and authentication are employed to protect your data.
  - title: Tasks in a Graph
    details: All your to-do tasks in a project are organized into one or more directed graphs, allowing the program to analyze dependencies and determine what to focus on now.
  - title: Free and Open
    details: The program is open source and free to use or modify. Standard formats and open protocols are used to store and transmit your data. Move in or move out easily at any time.
---

<style>
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3451b2 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>