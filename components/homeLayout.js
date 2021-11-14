import Link from 'next/link';
import Head from 'next/head';
import Footer from './footer';

export default function Layout({ children, home }) {
  return (
    <div className="dark:bg-black dark:text-white dark:border-white min-h-screen">

      <div className="pt-0 2xl:pt-5">
        <Head>
          <title>schulmappe. - BETA</title>
        </Head>
      </div>

      <div className="mb-2 2xl:mx-96 2xl:mb-5 border-2 border-black dark:border-white">
        <div className="p-4 divide-y-2 divide-black dark:divide-white">
          <header>
            <div className="relative">
              <h1 className="text-4xl lg:text-5xl font-semibold font-ubuntu pb-4">
                  <Link href="/">
                    <a className="hover:text-red-700 transition-colors duration-500">
                      schulmappe.
                    </a>
                  </Link>
                  <span className="font-thin text-2xl pl-4">BETA</span>
                </h1>
            </div>
          </header>
          <main>
              <div className="2xl:py-4 divide-y-2 2xl:divide-y-0 2xl:divide-x divide-black dark:divide-white">
                  <div className="text-xl xl:mx-32 py-4 2xl:py-0 2xl:px-4">
                      {children}
                  </div>
              </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
