export default function LandingPage() {
  return <>
  <div className="h-[60vh] bg-gradient-to-b from-primary to-white flex flex-col items-center justify-center">
    <div className="text-9xl font-extrabold text-secondary">Devault</div>
    <div className="text-xl"> Digilocker ka clone hai</div>
    <div className="pt-16 flex gap-16">
        <button className="bg-secondary px-6 py-4 rounded-3xl text-2xl text-white">Register/Login as user</button>
        <button className="bg-secondary px-6 py-4 rounded-3xl text-2xl text-white">Login as Issuer</button>
    </div>


  </div>
  </>;
}
