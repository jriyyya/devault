"use client";
export default function UserDashboard() {
  return (
    <>
      <div>
        <div className="bg-[#1f435d] px-[25vw] py-[10vh] flex flex-col justify-center gap-5">
          <div className="text-white tracking-tighter text-5xl font-extrabold">
            User Dashboard
          </div>
          <div className="text-white text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex culpa
            labore fuga! Tenetur voluptate alias quod odit, deserunt eos
            impedit.
          </div>
        </div>
        <div className="px-[15vw] flex flex-row justify-between py-[10vh] bg-secondary">
          <div
            className="bg-white w-[22vw] h-[40vh] rounded-[10vh] px-10 py-10 flex flex-col gap-5 cursor-pointer duration-200 hover:scale-105"
            onClick={() => {
              location.href = "/user/requests";
            }}
          >
            <div className="text-3xl font-bold tracking-tight text-primary">
              My Request
            </div>
            <div className="flex flex-col gap-2">
              <div>Lorem ipsum dolor sit amet.</div>
              <div>hehe okii.</div>
              <div>there goes something</div>
              <div>and more soemthing</div>
            </div>
          </div>
          <div className="bg-white w-[22vw] h-[40vh] rounded-[10vh] px-10 py-10 flex flex-col gap-5 cursor-pointer duration-200 hover:scale-105">
            <div className="text-3xl font-bold tracking-tight text-primary">
              New Request
            </div>
            <div className="flex flex-col gap-2">
              <div>Lorem ipsum dolor sit amet.</div>
              <div>hehe okii.</div>
              <div>there goes something</div>
              <div>and more soemthing</div>
            </div>
          </div>
          <div className="bg-white w-[22vw] h-[40vh] rounded-[10vh] px-10 py-10 flex flex-col gap-5 cursor-pointer duration-200 hover:scale-105">
            <div className="text-3xl font-bold tracking-tight text-primary">
              My Documents
            </div>
            <div className="flex flex-col gap-2">
              <div>Lorem ipsum dolor sit amet.</div>
              <div>hehe okii.</div>
              <div>there goes something</div>
              <div>and more soemthing</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
