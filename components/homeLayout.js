import Link from 'next/link';
import Head from 'next/head';
import Menu from './menu';

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
                  <Link href="/">
                    <a className="hover:text-red-700 transition-colors duration-500">
                      schulmappe.
                    </a>
                  </Link>
                </h1>
            </div>
            
          </header>
            <main>
                <div className="2xl:py-4 divide-y-2 2xl:divide-y-0 2xl:divide-x divide-black dark:divide-white">
                    <div className="text-xl xl:mx-96 py-4 2xl:py-0 2xl:px-4">
                        {children}
                    </div>
                </div>
            </main>
        </div>
      </div>
      <div className="relative h-8 2xl:h-5 text-center uppercase font-ubuntu font-thin text-gray-500 dark:text-gray-300">
        <div className="absolute inset-x-0 bottom-2">
            &copy; 2021 Privatchat!
        </div>
      </div>
    </div>
  );
}
