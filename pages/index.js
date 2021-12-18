import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-4xl lg:text-8xl font-bold uppercase">
        schulmappe
      </div>
      <div className="lg:text-xl font-bold uppercase">
        <Link href="/app">
          <a className="hover:text-red-700 transition-colors duration-200">login</a>
        </Link>
      </div>
    </div>
  )
}
