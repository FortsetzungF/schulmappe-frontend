import Link from 'next/link';
import Head from 'next/head';
import Warning from './warning';
import Menu from './menu';
import UploadForm from './uploadForm';
import AccountHeader from "./acccountHeader";
import Footer from './footer';

export default function Layout({ children, home }) {
  return (
    <div className="dark:bg-black dark:text-white dark:border-white min-h-screen">

      <div className="pt-0 2xl:pt-5">
        <Head>
          <title>schulmappe.</title>
        </Head>
      </div>

      <div className="mb-2 2xl:mx-32 2xl:mb-5 border-2 border-black dark:border-white">
        <div className="p-4 divide-y-2 divide-black dark:divide-white">
          <header>
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl font-semibold font-ubuntu pb-4">
                  <Link href="/news">
                    <a className="hover:text-red-700 transition-colors duration-500">
                      schulmappe.
                    </a>
                  </Link>
                </h1>

                
                <div className="absolute bottom-0 right-0 p-2 pr-0">
                  <AccountHeader />
                </div>
            </div>

            {/* <Warning /> */}
            
          </header>
          <main>
            <div className="grid 2xl:grid-cols-7 gap-4 2xl:py-4 divide-y-2 2xl:divide-y-0 2xl:divide-x divide-black dark:divide-white">
              <div className="2xl:col-span-1 px-4">
                <Menu />
              </div>
              {!home ? (
                <>
                  <div className="2xl:col-span-4 text-lg py-4 2xl:py-0 2xl:px-4">
                    {children}
                  </div>
                  <div className="2xl:col-span-2 text-xl py-4 2xl:py-0 2xl:px-4">
                    <UploadForm />
                  </div>
                </>
              ) : (
                <div className="2xl:col-span-6 text-lg py-4 2xl:py-0 2xl:px-4">
                  {children}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
