import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import Header from "@/components/header";
import Section from "@/components/section";

export default function Home() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Header />
        <Section title="Summary">
          <p>{siteConfig.data.user.summary}</p>
        </Section>

        <Section title="Work Experience">
          {siteConfig.data.experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <div className="flex justify-between">
                <span>{exp.company}</span>
                <span>{exp.date}</span>
              </div>
              <ul className="list-disc ml-6 mt-2">
                {exp.points.map((point, j) => (
                  <li key={j} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Contact">
          <div className="space-y-2">
            <p>{siteConfig.data.contact.location}</p>
            <p>{siteConfig.data.contact.phone}</p>
            <a
              className="text-blue-600 hover:underline"
              href={`mailto:${siteConfig.data.contact.email}`}
            >
              {siteConfig.data.contact.email}
            </a>
            <br />

            <Link
              isExternal
              aria-label="Github"
              href={siteConfig.data.contact.github}
            >
              <GithubIcon className="text-default-500" />
              <p>GitHub Profile</p>
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
}
