import Logo from "@/assets/ev_logo.svg";
import ProjectsIcon from "@/assets/projects.svg";
import BlogIcon from "@/assets/blog.svg";
import NowIcon from "@/assets/now.svg";
import UsesIcon from "@/assets/uses.svg";
import Gmail from "@/assets/gmail.svg";
import GitHub from "@/assets/github.svg";
import LinkedIn from "@/assets/linkedin.svg";
import Bluesky from "@/assets/bluesky.svg";
import Mastodon from "@/assets/mastodon.svg";
import YouTube from "@/assets/youtube.svg";

export const MY_NAME = "Edward Vonschondorf";

export const MY_ALIAS = "Torvec";

export const MY_EMAIL = "mailto:me@edward-vonschondorf.dev";

export const MY_RESUME = "edward_vonschondorf_resume_06MAY2025.pdf";

export const pageLinks = [
  { name: "Home", href: "/", Icon: Logo },
  { name: "Projects", href: "/projects", Icon: ProjectsIcon },
  { name: "Blog", href: "/blog", Icon: BlogIcon },
  { name: "Now", href: "/now", Icon: NowIcon },
  { name: "Uses", href: "/uses", Icon: UsesIcon },
];

export const socialLinks = [
  {
    name: "Email",
    href: MY_EMAIL,
    Icon: Gmail,
  },
  {
    name: "GitHub",
    href: "https://github.com/Torvec",
    Icon: GitHub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/edward-vonschondorf/",
    Icon: LinkedIn,
  },
  {
    name: "Bluesky",
    href: "https://bsky.app/profile/edward-vonschondorf.dev",
    Icon: Bluesky,
  },
  {
    name: "Mastodon",
    href: "https://mastodon.social/@edvonschondorf",
    Icon: Mastodon,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@edward-vonschondorf-dev",
    Icon: YouTube,
  },
];

export const ISSUE_TITLE = "Article Issue: YOUR ISSUE HERE";

export const ISSUE_BODY = `What kind of Issue?

- Select: Typo, Broken Link, Fact Check, Other

**Description:**

- Description Here

**Proposed Fix:**

- Proposed Fix Here`;
