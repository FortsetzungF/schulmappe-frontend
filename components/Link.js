import Link from "next/link"

export default function LinkComp({ children, href }) {
  return(
    <Link href={href}>
      <a className="hover:text-red-700 transition-colors duration-200">{children}</a>
    </Link>
  )
}