"use client"


export default function SignupModal() {
    return <>
    <div className="flex gap-8 flex-col z-10 w-full">
        <div className="flex flex-row relative gap-2 py-4 px-4 border-2 border-secondary rounded-[1rem] transition ease-in delay-150 focus-within:border-primary">
        <img src="https://img.icons8.com/ios-glyphs/30/1f435d/documents.png" className=""/>
            <input type="Number" placeholder="Aadhar Card Number" className="w-full focus:outline-0 text-lg"/> 
        </div>

        <div className="flex flex-row relative gap-2 py-4 px-4 border-2 border-secondary rounded-[1rem] transition ease-in delay-150 focus-within:border-primary">
        <img src="https://img.icons8.com/fluency-systems-filled/32/1f435d/user.png"/>
            <input type="text" placeholder="Full name" className="w-full focus:outline-0 text-lg"/> 
        </div>

        <div className="flex flex-row relative gap-2 py-4 px-4 border-2 border-secondary rounded-[1rem] transition ease-in delay-150 focus-within:border-primary">
        <img src="https://img.icons8.com/material/32/1f435d/password1--v1.png"/>
            <input type="password" placeholder="Password" className="w-full focus:outline-0 text-lg"/> 
        </div>

        <div className="flex flex-row relative gap-2 py-4 px-4 border-2 border-secondary rounded-[1rem] transition ease-in delay-150 focus-within:border-primary">
        <img src="https://img.icons8.com/material-outlined/32/1f435d/reviewer-female.png"/>
            <input type="password" placeholder="Confirm Password" className="w-full focus:outline-0 text-lg"/> 
        </div>
        <button className="bg-[#1f5982] text-white py-2 px-4 rounded-lg w-[10vw] text-xl font-bold tracking-tighter hover:scale-105">Submit</button>
    </div>
    </>
}