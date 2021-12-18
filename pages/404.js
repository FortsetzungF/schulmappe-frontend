import Link from "@components/Link";

export default function NotFound() {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <p className="text-4xl lg:text-8xl font-bold font-mono uppercase">404</p>
      <p className="text-lg lg:text-2xl font-bold uppercase text-center">
        geh mal lieber wieder {" "}
        <Link href="/">
          zurück!
        </Link>
      </p>
    </div>
  )
}