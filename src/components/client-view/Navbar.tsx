"use client";

import { useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

interface MenuItem {
  id: string;
  label: string;
}

interface CreateMenusProps {
  activeLink: string;
  getMenuItems: MenuItem[];
  setActiveLink: (id: string) => void;
}

const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "experience",
    label: "Experience",
  },
  {
    id: "project",
    label: "projects",
  },
];

function CreateMenus({
  activeLink,
  getMenuItems,
  setActiveLink,
}: CreateMenusProps) {
  return getMenuItems.map((item) => (
    <LinkScroll
      key={item.id}
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-primary-500 animation-active font-bold"
        : "text-[#fff] hover:text-primary-500"
    }`}
    >
      {item.label}
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className="cursor-pointer flex gap-2 font-bold items-center text-[20px] text-primary-500">
          <div className="w-[60px] h-[40px] flex justify-center items-center p-3 rounded-[8px] border-primary-500 bg-gradient-to-r from-primary-500 to-secondary-500">
            <span className="text-[#fff] text-[25px] font-bold">Sam</span>
          </div>
          Portfolio
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className={`menu md:block md:w-auto ${
            navbarOpen ? "block" : "hidden"
          }`}
          id="navbar"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 p-4 md:p-0 items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
            <li>
              <button
                onClick={() =>
                  scroller.scrollTo("contact", {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                  })
                }
                className="py-3 px-6 border-[2px] bg-[#fff] border-primary-500 text-[#000] font-semibold rounded-lg text-xl tracking-widest hover:bg-gradient-to-r from-primary-500 to-secondary-500 hover:text-[#fff] transition-all outline-none"
              >
                Contact Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
