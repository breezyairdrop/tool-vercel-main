"use client";
import Head from "next/head";
import Footer from "@/components/Footer";
import { Nav } from "@/components/Nav";
import "../app/globals.css";
import "../style/style2.css";
import "../style/style.css";
import "../style/tableStyle.css";
import dynamic from "next/dynamic";
// import {Header} from "@/components/header";
// import Link from 'next/link'
// import useSWR from 'swr'

const SearchBar = dynamic(() => import("@/components/SearchBar"), {
  ssr: false,
});


const Leads = () => {

  

  return (
    <div className="flex max-w-7xl mx-auto flex-col items-center justify-center min-h-screen pb-2">
      <meta name="theme-color" content="#825fff" />
      <Head>
        <title>Powers at your fingertips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <p className="border rounded-2xl py-1 px-4 text-sm mb-5 hover:scale-105  rotating-text-wrapper">
          <span>
            <b>Excellence</b> yields <b>Opportunities</b>
          </span>
          <span>
            Think <b>Bias for Action</b>
          </span>
          <span>
            <b>89,982</b> Leads generated so far
          </span>
        </p>
        <br />
        <br />
        <h1 className="sm:text-7xl text-3xl max-w-[708px] sm:max-w-[1100px] font-bold">
          Ambition is the first step towards
          <span className="sm:text-7xl ml-5 text-3xl font-bold gradient">
            SUCCESS
          </span>
        </h1>
        <br />
        <SearchBar/>
        <br />
        <br />
      </main>
      <Footer />
    </div>
  );
};

export default Leads;
