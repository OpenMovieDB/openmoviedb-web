import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

import logo from "@/public/Hero/header/image.png";
import userLogo from "@/public/Hero/header/user.png";

const mainItems = [
  { name: "Главная", href: "#" },
  { name: "Избранное", href: "#" },
  { name: "История", href: "#" },
  { name: "Подписки", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="bg-transparent md:block hidden absolute w-full">
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-16 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        {mainItems.map((item) => (
          <a
            href="#"
            className="mr-16 text-sm font-semibold leading-6  text-slate-100"
            key={item.name}
          >
            {item.name}
          </a>
        ))}

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
}
