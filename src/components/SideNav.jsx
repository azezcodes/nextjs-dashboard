import React from "react";
import { links } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Store } from "@/context/Context";
const SideNav = () => {
  const { clicked } = Store();
  const pathname = usePathname();
  return (
    <>
      {clicked ? (
        <div className="w-56">
          <div className="w-56 py-6 flex flex-col gap-6 h-screen border-r fixed top-0 left-0 z-50 bg-white">
            <h4 className="relative mx-auto font-bold ">
              NextJS{" "}
              <span className="text-sky-600 font-bold text-xs absolute -rotate-45">
                14
              </span>
            </h4>
            <div className="relative top-10 links  w-full flex flex-col gap-3 items-center px-3">
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`cursor-pointer flex gap-2 rounded-md py-1 px-2 justify-normal w-full bg-white shadow-sm items-center ${
                    pathname === link.path && "bg-sky-400 text-white"
                  }`}
                >
                  <span className="h-6 w-6 text-slate-900">{link.icon}</span>
                  <label className="  text-sm font-[500] text-gray-700 cursor-pointer">
                    {link.label}
                  </label>
                </Link>
              ))}{" "}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SideNav;
