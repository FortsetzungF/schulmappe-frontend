import Faecherlist from "@/components/Faecherlist";

export default function Sidebar() {
  return(
    <div className="my-4 lg:basis-1/6 print:hidden">
      <div className="font-extrabold italic uppercase">
        <h2 className="text-2xl lg:text-4xl">faecher</h2>
      </div>
      <Faecherlist />
    </div>
  )
}