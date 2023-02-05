"use client";

import UserRequestModal from "@/components/UserRequestModal";
import UserRequestPreview from "@/components/UserRequestPreview";

export default function UserRequest() {
  return (
    <>
      <div className="bg-secondary flex flex-row justify-between px-[15vw] py-[10vh]">
        <div className="flex flex-col gap-10 h-[80vh] w-[30vw] border-2 border-black">
          <div>
          <UserRequestPreview />
          </div>
        </div>
        <div>
          <UserRequestModal />
        </div>
      </div>
    </>
  );
}
