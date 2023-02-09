"use client";

import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import { useState } from "react";

export default function UserLogin() {
  const [modalType, setModalType] = useState("login");
  const changeModal = () => {};

  return (
    <>
      <div className="flex flex-row h-screen justify-between px-[15vw] py-[8vh] bg-primary">
        <div className="flex  flex-col justify-between">
          <div
            onClick={() => {
              setModalType("login");
            }}
            className={`relative overflow-hidden h-[40vh] w-[30vw] bg-white rounded-[5vw] flex flex-col gap-4 px-12 pt-12 cursor-pointer transition ease-in delay-150 ${
              modalType === "login"
                ? "scale-105 shadow-[rgba(0,_0,_0,_0.8)_0px_30px_90px]"
                : ""
            }`}
          >
            <div className="absolute top-4 right-[1rem] z-10 h-[36vh] w-[28vw] rounded-[4vw] border-2" />
            <div className="text-6xl font-extrabold tracking-tighter text-primary text-end">
              Login
            </div>
            <div className="text-end">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              assumenda!
            </div>
            <div className="absolute -bottom-0 left-10 -rotate-0">
              <img
                src="https://img.icons8.com/metro/140/1f435d/workstation.png"
                alt="1"
              />
            </div>
          </div>
          <div
          onClick={() => {
            setModalType("signup");
          }}
            className={`relative h-[40vh] w-[30vw] bg-white rounded-[5vw] flex flex-col gap-4 px-12 pt-12 overflow-hidden cursor-pointer transition ease-in delay-150 ${
              modalType === "signup"
                ? "scale-105 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                : ""
            }`}
          >
            <div className="absolute top-4 right-[1rem] z-10 h-[36vh] w-[28vw] rounded-[4vw] border-2" />
            <div className="text-6xl font-extrabold tracking-tighter text-primary">
              SignUp
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, ipsam.
            </div>
            <div className="absolute -bottom-1 right-5 -rotate-16">
              <img
                src="https://img.icons8.com/pastel-glyph/140/1f435d/document-splash--v3.png"
                alt="1"
              />
            </div>
          </div>
        </div>
        <div className="relative h-[84vh] w-[38vw] bg-white rounded-[5vw] px-16 py-16 flex items-center">
          <div className="absolute top-[1rem] right-[1rem] z-10 h-[80vh] w-[36vw] rounded-[4vw] border-2" />
          {modalType === "signup" && <SignupModal />}
          {modalType === "login" && <LoginModal />}
        </div>
      </div>
    </>
  );
}
