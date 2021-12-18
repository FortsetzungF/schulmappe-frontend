import Faecherlist from "@components/Faecherlist";

export default function Sidebar() {
  return(
    <div className="my-4 lg:basis-1/6 bg-gray-800 print:hidden">
      <Faecherlist />
    </div>
  )
}