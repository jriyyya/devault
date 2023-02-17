"use client";
import { useState } from "react";
import IssuerText from "../IssuerText";
import UserText from "../UserText";

export default function UserRequestModal() {
  const [showDetails, setShowDetails] = useState(true);
  return (
    <>
      <div className="bg-primary h-[75vh] rounded-[1rem] p-4 flex flex-col justify-between" >
        <div className="bg-white rounded-[1rem] p-4">
          <div className="p-2 flex flex-row justify-between items-center border-b-2">
            <div className="font-bold text-2xl tracking-tighter">
              New Aadhar Card
            </div>
            <div
              className={`cursor-pointer transition ease-in delay-50 hover:scale-125 ${showDetails ? 'rotate-180' : ''}`}
              onClick={() => {
                setShowDetails(!showDetails);
              }}
            >
              <img src="https://img.icons8.com/ios-filled/32/1f435d/submit-progress.png" />
            </div>
            <div>January, 2023, 13:14 IST</div>
          </div>

          <div className={`${showDetails ? "" : "hidden"}`}>
            <div className="flex flex-row justify-between py-2">
              <div className="flex flex-col justify-start">
                <div className="font-extrabold text-xl items-center text-primary">
                  Type
                </div>
                <div>Update</div>
              </div>
              <div className="flex flex-col justify-end">
                <div className="font-extrabold text-xl items-center text-primary text-end">
                  Department
                </div>
                <div>Unique Identification authority of India</div>
              </div>
            </div>
            <div className="pb-2 border-r-0 border-t-0 border-l-0 border-b-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              officiis nihil delectus quisquam aut dolore rerum recusandae
              alias. Adipisci, neque.
            </div>
            <div className="mt-2 bg-primary rounded-[1rem] p-2 text-white font-bold text-center">
              Files Attached
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 overflow-y-scroll">
          <IssuerText message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus inventore assumenda dolore perferendis eius! Adipisci impedit beatae atque quod odio." />
          <UserText message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus inventore assumenda dolore perferendis eius! Adipisci impedit beatae atque quod odio." />
          <IssuerText message="s eius! Adipisci impedit beatae atque quod odio." />
          <UserText message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus inventore assumenda dolore perferendis eius! Adipisci impedit beatae atque quod odio." />
          
        </div>
        <div className="bg-white mt-2 py-2  px-2 w-full flex flex-row gap-2 rounded-[0.5rem]">
          <input className="w-full text-lg focus:outline-0"/>
          <button className="px-2 py-1 bg-primary text-white rounded-[0.5rem] font-bold">Send</button>
        </div>
      </div>
    </>
  );
}
