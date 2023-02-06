"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import FloatingDocsBackground from "../components/FloatingDocsBackground";

export default function LandingPage() {
  return (
    <>
      <div className="hero flex h-screen p-10">
        <div className="flex flex-col justify-center gap-10 z-10">
          <div className="text-8xl font-extrabold tracking-tighter backdrop-blur">
            Secure Digital <br/> <span className=" text-primary">Vaulting</span>
          </div>
          <div className="flex gap-2 ml-2 backdrop-blur">
            <button className="text-2xl font-bold bg-[#1f5982] text-white px-4 py-4 rounded-lg" onClick={()=>{location.href='/auth/user'}}>
              Login/Signup as User
            </button>
            <button className="text-2xl font-bold bg-[#1f5982] text-white px-4 py-4 rounded-lg">
              Login as Issuer
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <FloatingDocsBackground />
      </div>
    </>
  );
}
