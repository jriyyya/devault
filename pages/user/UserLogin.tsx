"use client";

import LoginModal from "@/components/LoginModal";
import SignupModal from "@/components/SignupModal";
import { useState } from "react";

export default function UserLogin() {
  const [modalType, setModalType] = useState("login");
  const changeModal = () => {};

  return (
    <>
      <div className="flex flex-row h-screen justify-between px-[15vw] py-[8vh] bg-[#d0e6f5]">
        <div className="flex  flex-col justify-between">
          <div
            onClick={() => {
              setModalType("login");
            }}
            className={`relative overflow-hidden h-[40vh] w-[30vw] bg-white rounded-[5vw] flex flex-col gap-4 px-12 pt-12 cursor-pointer ${
              modalType === "login"
                ? "scale-105 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
                : ""
            }`}
          >
            <div className="absolute top-4 right-[1rem] z-10 h-[36vh] w-[28vw] rounded-[4vw] border-2" />
            <div className="text-6xl font-extrabold tracking-tighter text-primary">
              Login
            </div>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
              assumenda!
            </div>
            <div className="absolute -bottom-2 right-10 -rotate-0">
              <img
                src="/images/icons/user/2.png"
                alt="1"
                className="w-[8vw] aspect-auto"
              />
            </div>
          </div>
          <div
          onClick={() => {
            setModalType("signup");
          }}
            className={`relative h-[40vh] w-[30vw] bg-white rounded-[5vw] flex flex-col gap-4 px-12 pt-12 overflow-hidden cursor-pointer ${
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
            <div className="absolute -bottom-10 right-0 -rotate-12">
              <img
                src="/images/icons/user/1.png"
                alt="1"
                className="w-[12vw] aspect-auto"
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
