import Link from "@components/Link"

export default function Header() {
  return(
    <div>
      <h1 className="text-4xl lg:text-8xl font-extrabold uppercase">
        <Link href="/app" noUnderline>schulmappe.</Link>
      </h1>

      {/* <p className="font-mono italic text-xl ml-32">
        "Kunibert der Knobelfisch"
      </p> */}
    </div>
  )
}