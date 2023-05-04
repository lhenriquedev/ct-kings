import Image from "next/image";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="flex flex-col items-center justify-center max-w-screen-xl gap-6 px-4 py-4 mx-auto mb-4 center">
        <ul className="flex gap-4">
          <li>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram size={32} color="#fff" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <FaWhatsapp size={32} color="#fff" />
            </a>
          </li>
        </ul>
        <p className="text-white">&copy; 2023 CT Kings</p>
      </div>
    </footer>
  );
}
