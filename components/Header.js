import Link from "@components/Link"

export default function Header() {
  return(
    <div className="bg-gray-800">
      <h1 className="text-4xl lg:text-8xl font-extrabold italic uppercase">
        <Link href="/app">schulmappe.</Link>
      </h1>

      {/* <p className="font-mono italic text-xl ml-32">
        "Kunibert der Knobelfisch"
      </p> */}
    </div>
  )
}