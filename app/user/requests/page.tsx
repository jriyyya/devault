"use client";

import UserRequestModal from "@/components/user/UserRequestModal";
import UserRequestPreview from "@/components/user/UserRequestPreview";

export default function UserRequest() {
  return (
    <>
      <div className="h-screen px-[10vw]">
        <div className="text-center text-6xl font-extrabold py-10 tracking-tighter text-primary">My Request</div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col gap-2 h-[75vh] basis-[40%] border-4 border-primary p-4 rounded-[1rem] bg-primary overflow-y-scroll">
            <div>
              <UserRequestPreview status="pending" preview={true} />
            </div>

            <div>
              <UserRequestPreview status="successful" preview={false} />
            </div>

            <div>
              <UserRequestPreview status="rejected" preview={false} />
            </div>

            <div>
              <UserRequestPreview status="pending" preview={false} />
            </div>

            <div>
              <UserRequestPreview status="pending" preview={false} />
            </div>

            <div>
              <UserRequestPreview status="rejected" preview={false} />
            </div>

            <div>
              <UserRequestPreview status="rejected" preview={false} />
            </div>

            <div>
              <UserRequestPreview status="successful" preview={false} />
            </div>

            <div>
              <UserRequestPreview status="successful" preview={false} />
            </div>
          </div>
          <div className="basis-[60%]">
            <UserRequestModal />
          </div>
        </div>
      </div>
    </>
  );
}
