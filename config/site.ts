export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CV",
  data: {
    user: {
      name: "Vladimir Danilov",
      summary: `Full-Stack Developer, mainly working on TS with .NET`,
      description: "Full-Stack Developer",
    },
    experience: [
      {
        title: "Junior Software Engineer",
        company: "TravelLine, Yoshkar-Ola",
        date: "August 2023 - Current",
        points: [],
      },
    ],

    contact: {
      location: "Yoshkar-Ola, Mari El, Russia (Open to Remote)",
      phone: "+7(999)999-99-99",
      email: "skylorean@gmail.com",
      github: "https://github.com/skylorean",
    },
  },
};
