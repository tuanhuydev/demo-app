import React from "react";
import logoSrc from "@assets/images/footer-logo.png";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="bg-red-600 py-3">
      <div className="upper"></div>
      <div className="lower flex flex-col items-center">
        <Link href={"/"} className="p-3">
          <Image src={logoSrc} alt="Page logo" className="" width={300} />
        </Link>
        <ul className="flex list-none mb-5">
          <li className="text-xl text-white cursor-pointer mr-2">Home</li>
          <li className="text-xl text-white cursor-pointer mr-2">Join Us</li>
          <li className="text-xl text-white cursor-pointer mr-2">Contact</li>
        </ul>
        <ul className="flex list-none mb-5">
          <li className="text-3xl text-red-600 leading-none bg-slate-50 rounded-xl flex items-center p-2 cursor-pointer  mr-2">
            <FacebookOutlined />
          </li>
          <li className="text-3xl text-red-600 leading-none bg-slate-50 rounded-xl flex items-center p-2 cursor-pointer  mr-2">
            <InstagramOutlined />
          </li>
          <li className="text-3xl text-red-600 leading-none bg-slate-50 rounded-xl flex items-center p-2 cursor-pointer ">
            <LinkedinOutlined />
          </li>
        </ul>
        <ul className="flex flex-col lg:flex-row list-none">
          <li className="px-1 text-sm text-white after:content-none lg:after:content-['|'] after:pl-2">Legal Noties</li>
          <li className="px-1 text-sm text-white after:content-none lg:after:content-['|'] after:pl-2">Cookie Preferences</li>
          <li className="px-1 text-sm text-white after:content-none lg:after:content-['|'] after:pl-2">
            Copyright &copy; 2023 A.S. Watson Group All Rights Reserved
          </li>
          <li className="mx-1 text-sm text-white">Accessibility Statement</li>
        </ul>
      </div>
    </footer>
  );
}
