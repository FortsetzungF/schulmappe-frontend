import Link from 'next/link';
import Head from 'next/head';
import Warning from '@components/warning';
import Menu from '@components/menu';
import UploadForm from '@components/uploadForm';
import AccountHeader from "@components/acccountHeader";
import Footer from '@components/footer';

export default function Layout({ children, home }) {
  return (
    <div className="dark:bg-black dark:text-white dark:border-white min-h-screen">

      <div className="pt-0 lg:pt-5">
        <Head>
          <title>schulmappe. - BETA</title>
        </Head>
      </div>

      <div className="mb-2 xl:mx-32 lg:mx-6 xl:mb-5  border-2 border-black dark:border-white">
        <div className="p-4 divide-y-2 divide-black dark:divide-white">
          <header>
            <div className="relative">
              <h1 className="text-4xl xl:text-5xl font-semibold font-ubuntu pb-4">
                  <Link href="/app">
                    <a className="hover:text-red-700 transition-colors duration-500">
                      schulmappe.
                    </a>
                  </Link>
                  <span className="font-thin text-2xl pl-4">BETA</span>
                </h1>

                
                <div className="absolute bottom-0 right-0 p-2 pr-0">
                  <AccountHeader />
                </div>
            </div>

            {/* <Warning /> */}
            
          </header>
          <main>
            <div className="grid lg:grid-cols-7 gap-4 lg:py-4 divide-y-2 lg:divide-y-0 lg:divide-x divide-black dark:divide-white">
              <div className="2xl:col-span-1 px-4">
                <Menu />
              </div>
              {!home ? (
                <>
                  <div className="lg:col-span-4 text-lg py-4 lg:py-0 lg:px-4">
                    {children}
                  </div>
                  <div className="lg:col-span-2 text-xl py-4 lg:py-0 lg:px-4">
                    <UploadForm />
                  </div>
                </>
              ) : (
                <div className="lg:col-span-6 text-lg py-4 lg:py-0 lg:px-4">
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
