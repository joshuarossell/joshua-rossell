// Site-wide content: every piece of personal copy lives here, not in components.
// Anything wrapped in [brackets] is a placeholder for Joshua to replace.

export const site = {
  name: "Joshua Rossell",

  // PLACEHOLDER: one-line pitch shown under your name (also used as the page's meta description).
  pitch: "[Placeholder: your one-line pitch]",

  // PLACEHOLDER: About section, one string per paragraph.
  about: ["[Placeholder: write your About section here, in your own voice.]"],

  // PLACEHOLDER: the email address you want shown publicly.
  email: "placeholder@example.com",

  // Replace public/resume.pdf with your real resume (keep the same filename).
  resumePath: "/resume.pdf",

  links: {
    github: "https://github.com/joshuarossell",
    linkedin: "https://www.linkedin.com/in/joshua-rossell-35271128a",
  },
} as const;
