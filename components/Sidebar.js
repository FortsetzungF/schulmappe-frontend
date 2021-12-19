import Faecherlist from "@components/Faecherlist";

export default function Sidebar() {
  return(
    <div className="my-4 lg:basis-1/6 print:hidden">
      <Faecherlist />
    </div>
  )
}