import Link from "next/link";
import { useRouter } from "next/router";

import ThemeSwitcher from "./ThemeSwitcher";

interface HeaderLinkProps {
  isCurrentPath: boolean;
  href: string;
  label: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({
  isCurrentPath,
  href,
  label,
}) => {
  return (
    <Link
      className={`
        hover:underline hover:scale-110
        ${isCurrentPath && "shadow-stone-900 dark:shadow-white text-shadow"}
      `}
      href={href}
    >
      {label}
    </Link>
  );
};

interface RegisterProps {}

const Header: React.FC<RegisterProps> = () => {
  const router = useRouter();

  const isCurrentPath = (path: string) => router.asPath === path;

  return (
    <header
      className="
      flex flex-col lg:flex-row justify-between
      py-12 px-20 md:px-40 bg-gradient-to-b
      dark:from-stone-800 dark:via-[#0F0F0F]
      from-stone-500 via-[#F0F0F0]
    "
    >
      <h1 className="font-bold text-4xl">
        <Link className="hover:underline" href="/">
          <b>{"<BRENNO P."}</b>
          <b>{" RODRIGUES/>"}</b>
        </Link>
      </h1>

      <nav
        className="
        flex justify-end lg:justify-start
        items-center text-lg gap-7 py-5 md:py-0
      "
      >
        <HeaderLink
          isCurrentPath={isCurrentPath("/portfolio")}
          href="/portfolio"
          label="Portfolio"
        />
        <HeaderLink
          isCurrentPath={isCurrentPath("/")}
          href="/"
          label="Resume"
        />
        <HeaderLink
          isCurrentPath={isCurrentPath("/contact")}
          href="/contact"
          label="Contact"
        />

        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
