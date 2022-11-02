import Head from "next/head"
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function Layout({ children }) {
  return(
    <div className="bg-black text-white min-h-screen p-4">
      <Head>
        <title>SCHULMAPPE.</title>
      </Head>

      <Header />

      <div className="lg:flex lg:flex-row">
        <Sidebar />
        
        <div className="my-4 lg:ml-4 lg:basis-5/6 font-medium text-xl">
          {children}
        </div>
      </div>
    </div>
  )
}