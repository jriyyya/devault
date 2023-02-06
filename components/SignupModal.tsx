"use client"


export default function SignupModal() {
    return <>
    <div className="flex gap-8 flex-col z-10">
        <div className="flex flex-col gap-1">
            <div className="text-2xl font-extrabold tracking-tighter text-primary">Aadharcard</div>
            <input type="Number" className="py-2 px-1 border-2 border-secondary rounded-xl w-[30vw] active:border-primary"/> 
        </div>
        <div className="flex flex-col gap-1">
            <div className="text-2xl font-extrabold tracking-tighter text-primary">Full name</div>
            <input type="text" className="py-2 px-1 border-2 border-secondary rounded-xl w-[30vw] active:border-primary"/> 
        </div>
        <div className="flex flex-col gap-1">
            <div className="text-2xl font-extrabold tracking-tighter text-primary">Password</div>
            <input type="password" className="py-2 px-1 border-2 border-secondary rounded-xl w-[30vw] active:border-primary"/> 
        </div>
        <div className="flex flex-col gap-1">
            <div className="text-2xl font-extrabold tracking-tighter text-primary">Confirm Password</div>
            <input type="password" className="py-2 px-1 border-2 border-secondary rounded-xl w-[30vw] active:border-primary"/> 
        </div>
        <button className="bg-[#1f5982] text-white py-2 px-4 rounded-lg w-[10vw] text-xl font-bold tracking-tighter hover:scale-105">Submit</button>
    </div>
    </>
}