import { User } from "@heroui/user";

import { siteConfig } from "@/config/site";

export default function Header() {
  return (
    <header className="mb-8">
      <User
        description={siteConfig.data.user.description}
        name={siteConfig.data.user.name}
      />
    </header>
  );
}
