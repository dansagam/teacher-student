import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type SidebarLinkProps = {
  key: string;
  label: string;
  path: string;
  icon: React.ReactNode;
};
function SidebarLink({ path, label, icon }: SidebarLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      data-app-active={pathname.includes(path)}
      className=" data-[app-active=true]:bg-[#dbb872] hover:bg-[#dbb872] flex md:justify-center sm:justify-start justify-start gap-3 p-[1rem_1.4rem] items-center"
    >
      <span className=" text-xl">{icon} </span>
      <span className=" md:hidden sm:block flex text-lg">{label}</span>
    </Link>
  );
}

export default SidebarLink;
