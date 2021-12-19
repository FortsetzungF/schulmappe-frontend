import NextLink from "next/link"

export default function Link({ children, href, external, noUnderline }) {

  if (external) {
    return(
      <NextLink href={href}>
        <a className="hover:text-teal-400 transition-colors duration-200 underline underline-offset-4 decoration-teal-400 after:content-['_↗']">{children}</a>
      </NextLink>
    )
  }

  if (noUnderline) {
    return(
      <NextLink href={href}>
        <a className="hover:text-teal-400 transition-colors duration-200">{children}</a>
      </NextLink>
    )
  }

  return(
    <NextLink href={href}>
      <a className="hover:text-teal-400 transition-colors duration-200 underline underline-offset-4 decoration-teal-400">{children}</a>
    </NextLink>
  )
}