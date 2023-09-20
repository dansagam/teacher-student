import React from "react";
import Image from "next/image";
import TeenageStudentImage from "@/assets/img/teenage-students-m.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-common-white py-24 px-10 xlsm:px-5">
      <Image
        src={TeenageStudentImage}
        alt="Teenage Student Image"
        className=" absolute top-0 left-0 opacity-40 w-full h-full md:hidden object-cover"
        priority
      />
      <div className=" flex items-center gap-3  h-[350px] md:h-[250px]  xlsm:h-[180px] w-full">
        <h1 className=" font-semibold text-4xl font-poppin text-center">
          Welcome to Basic Teacher and Student Application
        </h1>
      </div>
      <div className=" grid place-items-center">
        <div>
          <Link
            href="/teacher"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold group-hover:text-primary-main`}>
              Do you wish to view the list of Teachers
            </h2>
          </Link>
        </div>
        <div>
          <Link
            href="/student"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold group-hover:text-primary-main`}>
              Do you wish to view the list of Students
            </h2>
          </Link>
        </div>
      </div>
      Help me to see you here
    </main>
  );
}
