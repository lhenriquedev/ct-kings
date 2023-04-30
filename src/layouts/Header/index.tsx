"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { menuLinksList } from "@/constants";

import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#000] border-[#262626] border-b-[1px] z-[9999]">
      <div className="flex items-center justify-between max-w-screen-xl px-4 py-4 mx-auto text-white">
        <Link className="flex items-center gap-4" href="#">
          <Image
            src="/logo.svg"
            alt="Logo do Centro de treinamento Kings"
            width={80}
            height={80}
          />
          <span className="font-bold uppercase">CT Kings</span>
        </Link>
        <div
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <HiXMark
              size={36}
              style={{
                position: "relative",
                zIndex: 99999,
              }}
            />
          ) : (
            <HiBars3BottomRight
              size={36}
              style={{
                position: "relative",
                zIndex: 99999,
              }}
            />
          )}
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {menuLinksList.map(({ id, label, url }) => (
              <li key={id}>
                <Link className="font-bold uppercase" href={url}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {isMenuOpen && (
          <nav className="bg-black absolute top-0 right-0 w-full h-screen overflow-hidden z-[9999]">
            <ul className="flex flex-col items-center justify-center h-full gap-12">
              {menuLinksList.map(({ id, label, url }) => (
                <li key={id}>
                  <Link
                    scroll={false}
                    className="text-2xl font-bold uppercase"
                    href={url}
                    onClick={handleCloseMenu}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
