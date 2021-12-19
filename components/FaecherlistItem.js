import Link from "@components/Link"

export default function FaecherlistItem({ children }) {
  return(
    <div className="pl-6 text-2xl italic lg:pl-0 lg:text-3xl lg:text-left">
      <Link href="/app">
        {children}
      </Link>
    </div>
  )
}