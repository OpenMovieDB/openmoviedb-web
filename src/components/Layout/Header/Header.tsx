"use client";

import Image from "next/image";

import logo from "@/public/Hero/header/image.png";
import userLogo from "@/public/Hero/header/user.png";

import { usePathname } from "next/navigation";

import { Search } from "@/components/Search/Search";

const Header = () => {
  const pathname = usePathname();

  const isStaticPage =
    pathname === "/register" ||
    pathname === "/login/" ||
    pathname === "/popular" ||
    pathname === "/settings";

  return (
    <header
      className={`bg-transparent md:block hidden w-full z-10 ${
        isStaticPage ? "static" : "absolute"
      }`}
    >
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5">
            <Image className="h-16 w-auto" src={logo} alt="" />
          </a>
        </div>

        <Search />

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900"
          ></a>
          <Image className="h-16 w-auto" src={userLogo} alt="" />
        </div>
      </nav>
    </header>
  );
};
export default Header;
