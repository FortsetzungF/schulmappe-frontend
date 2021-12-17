import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

export default function Layout({ children }) {
  return(
    <div className="bg-black text-white min-h-screen p-4">

      <Header />

      <div className="lg:flex lg:flex-row">
        <Sidebar />

        <div className="my-4 lg:ml-4 lg:basis-5/6 font-medium text-xl bg-gray-800">
          {children}
        </div>
      </div>



      
    </div>
  )
}