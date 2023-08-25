import logoSrc from "@assets/images/logo.png";
import Image from "next/image";
import { Input } from "antd";
import Link from "next/link";
import styles from "./styles.module.scss";
import { makekey } from "@/app/utils/string";

function Navbar() {
  const links = [
    {
      label: "Our Company",
      path: "/",
      children: [
        { label: "0+0 Retail", path: "/" },
        { label: "Purpose and Commitment", path: "/" },
        { label: "Culture and Heritage", path: "/" },
        { label: "Our Achievements", path: "/" },
      ],
    },
    {
      label: "Our Brands",
      path: "/",
      children: [
        { label: "Health & Beauty", path: "/" },
        { label: "Luxury Perfumeries & Cosmetics", path: "/" },
        { label: "Food, Electronics & Wine", path: "/" },
        { label: "Beverages", path: "/" },
      ],
    },
  ];
  return (
    <header className="w-full">
      <div className="flex items-center container mx-auto py-8 px-3">
        <Link href={"/"}>
          <Image src={logoSrc} alt="Page logo" width={300} />
        </Link>
        <div className="grow flex justify-end ml-4">
          <Input
            className="w-56 rounded-large"
            placeholder="Search"
            size="small"
          />
        </div>
      </div>
      <div className="bg-red-600 h-12">
        <nav className={`list-none container flex mx-auto ${styles.container}`}>
          {links.map(({ label, children }) => (
            <li
              className="relative px-3 w-fit h-12 flex items-center"
              key={makekey()}
            >
              <span className={`capitalize font-semibold ${styles.title}`}>
                {label}
              </span>
              <ul
                className={`absolute top-12 left-0 z-20 py-3 px-5 w-max ${styles.menu}`}
              >
                {children.map(({ label }) => (
                  <li className="pb-3 text-sm" key={label}>
                    {label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
