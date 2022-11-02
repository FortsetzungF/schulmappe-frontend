import Link from "@/components/Link"

export default function FaecherlistItem({ children }) {
  const urlString = `/app/fach/${children}`
  
  return(
    <div className="pl-6 text-2xl italic lg:pl-0 lg:text-3xl">
      <Link href={urlString}>
        {children}.
      </Link>
    </div>
  )
}