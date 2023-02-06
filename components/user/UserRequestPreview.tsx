"use client";

interface UserRequestModalProps {
  preview: boolean;
  status: string;
}

export default function UserRequestPreview(props : UserRequestModalProps) {
  const { preview, status } = props;
  return (
    <>
      <div
        className={`flex flex-row justify-between w-[100%] border border-primary px-6 py-4 rounded-[1rem] duration-200 ${
          preview ? "bg-secondary" : "bg-white hover:opacity-80"
        } cursor-pointer`}
      >
        <div>
          <div className="text-xl font-semibold">Issue Topic</div>
          <div className="text-sm font-light">Date created</div>
        </div>
        <div>
          {status === "pending" && (
            <img src="https://img.icons8.com/sf-regular/48/1f435d/present.png" />
          )}

          {status === "successful" && (
            <img src="https://img.icons8.com/windows/44/40C057/ok--v1.png" />
          )}

          {status === "rejected" && (
            <img src="https://img.icons8.com/sf-regular/48/FA5252/cancel.png" />
          )}
        </div>
      </div>
    </>
  );
}
