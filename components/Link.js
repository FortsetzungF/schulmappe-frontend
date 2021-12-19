import NextLink from "next/link"

export default function Link({ children, href, external }) {

  if (external) {
    return(
      <NextLink href={href}>
        <a className="hover:text-teal-400 transition-colors duration-200 after:content-['_↗']">{children}</a>
      </NextLink>
    )
  }

  return(
    <NextLink href={href}>
      <a className="hover:text-teal-400 transition-colors duration-200">{children}</a>
    </NextLink>
  )
}