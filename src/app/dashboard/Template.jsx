"use client";

import Sidebar from "@/components/SideNav";
import Backdrop from "@/components/Backdrop";
import Navbar from "@/components/Navbar";
import { Store } from "@/context/Context";

const Template = ({ children }) => {
  const { clicked } = Store();
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div>{children}</div>
      </div>
      <Backdrop />
    </section>
  );
};

export default Template;
