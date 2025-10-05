import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Portfolio of J. C. Vieth",
  EMAIL: "hello@jcvieth.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "",
};

export const WORK: Metadata = {
  TITLE: "Career",
  DESCRIPTION: "",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "",
};

export const SOCIALS: Socials = [
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/mrjcv",
  }
];
