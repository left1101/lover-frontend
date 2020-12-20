<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import faviconIco from "./assets/favicon.ico";
import faviconPng from "./assets/favicon.png";

export default {
  name: "App",
  metaInfo: {
    title: "最爱你",
    titleTemplate: "%s | 至我的爱人",
    link: [
      { rel: "favicon", href: faviconIco },
      { rel: "apple-touch-icon", href: faviconPng, sizes: "57x57" },
      { rel: "apple-touch-icon", href: faviconPng, sizes: "72x72" },
      {
        rel: "apple-touch-icon",
        href: faviconPng,
        sizes: "114x114"
      },
      {
        rel: "apple-touch-icon",
        href: faviconPng,
        sizes: "144x144"
      },
      {
        rel: "shortcut icon",
        href: faviconIco,
        type: "image/x-icon"
      }
    ]
  }
};
</script>

<style>
</style>
