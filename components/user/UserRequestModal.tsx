"use client";
export default function UserRequestModal() {
  return (
    <>
      <div className="bg-primary h-full rounded-[1rem] p-4 mx-6">
        <div className="bg-white rounded-[1rem] p-4">
          <div className="p-2 flex flex-row justify-between items-center border-b-2">
            <div className="font-bold text-2xl tracking-tighter">
              New Aadhar Card
            </div>
            <div>January, 2023, 13:14 IST</div>
          </div>
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
            officiis nihil delectus quisquam aut dolore rerum recusandae alias.
            Adipisci, neque.
          </div>
          <div className="mt-2 bg-primary rounded-[1rem] p-2 text-white font-bold text-center">
            Files Attached
          </div>
        </div>
      </div>
    </>
  );
}
