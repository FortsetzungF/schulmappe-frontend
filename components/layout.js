import Link from 'next/link';
import Head from 'next/head';
// import Warning from './warning';
import Menu from './menu';
import UploadForm from './uploadForm';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>schulmappe.</title>
      </Head>
      <div className="m-2 2xl:mx-32 2xl:my-5 border-2 border-black">
        <div className="p-4 divide-y-2 divide-black">
          <header>
            <h1 className="text-4xl lg:text-5xl font-semibold font-ubuntu pb-4">
              <Link href="/">
                <a className="hover:text-red-700 transition-colors duration-500">
                  schulmappe.
                </a>
              </Link>
            </h1>
            {/* <Warning /> */}
          </header>
          <main>
            <div className="grid 2xl:grid-cols-7 gap-4 2xl:py-4 divide-y-2 2xl:divide-y-0 2xl:divide-x divide-black">
              <div className="2xl:col-span-1 px-4">
                <Menu />
              </div>
              {!home ? (
                <>
                  <div className="2xl:col-span-4 text-xl py-4 2xl:py-0 2xl:px-4">
                    {children}
                  </div>
                  <div className="2xl:col-span-2 text-xl py-4 2xl:py-0 2xl:px-4">
                    <UploadForm />
                  </div>
                </>
              ) : (
                <div className="2xl:col-span-6 text-xl py-4 2xl:py-0 2xl:px-4">
                  {children}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
      <div className="relative h-8 2xl:h-5 text-center font-mono font-semibold">
        <div className="absolute inset-x-0 bottom-2">
          <a
            href="https://fortsetzungf.vercel.app/"
            className="hover:text-red-700 transition-colors duration-300"
            rel="noopener noreferrer"
            target="_blank"
          >
            FortsetzungF
          </a>{' '}
          & Privatchat!
        </div>
      </div>
    </div>
  );
}
