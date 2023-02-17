"use client";

interface IssuerTextProps {
  message: string;
}

export default function IssuerText(props: IssuerTextProps) {
  const { message } = props;
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className=" flex flex-row basis-2/3 gap-2">
          <div className="basis-[10%] flex flex-col justify-end">
            <img
              src="https://imgs.search.brave.com/3wDQuYPbAbewMvVZzDAUzEDg7tCMhOzNtGyTI5fcJvs/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/c2hhcmVpY29uLm5l/dC9kYXRhLzUxMng1/MTIvMjAxNi8wOS8x/NS84Mjk0NTRfdXNl/cl81MTJ4NTEyLnBu/Zw"
              alt="issuer"
            />
          </div>
          <div className="gap-2 flex flex-col basis-[80%]">
            <div className="bg-secondary p-2 rounded-[1rem]">{message}</div>
            <div className="bg-secondary p-2 rounded-[1rem]">{message}</div>
          </div>
        </div>
      </div>
    </>
  );
}
