import beat from "../assets/heartbeat.svg";
export default function Header() {
  return (
    <div className="  Header  flex text-white w-full  font-dancingScript px-20  ">
      <img src={beat} alt="" width={120} />
      <h1 className="pt-12">My Ink</h1>
    </div>
  );
}
