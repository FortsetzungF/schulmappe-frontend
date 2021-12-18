import Link from "@components/Link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="text-4xl lg:text-8xl font-bold uppercase">
        schulmappe
      </div>
      <div className="lg:text-xl font-bold uppercase">
        <Link href="/app">login</Link>
      </div>
    </div>
  )
}
