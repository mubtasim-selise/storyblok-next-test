/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Feature from "./Feature";
import Grid from "./Grid";
import Teaser from "./Teaser";
import Page from "./Page";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
  },
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
