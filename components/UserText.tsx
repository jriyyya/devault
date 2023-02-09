"use client";

interface UserTextProps {
  message: string;
}

export default function UserText(props: UserTextProps) {
  const { message } = props;
  return (
    <>
      <div className="flex flex-row p-2 justify-end">
        <div className="flex flex-row basis-2/3 gap-2">
          <div className="gap-2 flex flex-col">
            <div className="bg-white p-2 rounded-[1rem]">{message}</div>
          </div>
          <div className="w-[10vw] flex flex-col justify-end">
            <img
              className=""
              src="https://imgs.search.brave.com/_rd95Ji3hGzQAbSDuXsDtbyeK_L87jarV_whx4pBKZU/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvYXZhdGFycy1y/b3VuZC1mbGF0LzMz/L21hbjctNTEyLnBu/Zw"
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
}
