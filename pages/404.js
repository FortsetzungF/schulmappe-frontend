// import Layout from "@components/layout"
// import Link from "next/link"

// export default function Custom404() {
//   // return <h1>404 - Page Not Found</h1>
//   return (
//     <Layout home>
// 				<div className="flex h-full items-center text-2xl font-ubuntu m-4">
//           <div className="font-semibold text-7xl">404</div>
//           <div className="p-4 font-medium text-center">
//             nö. gibbet nich.
//           </div>
//         </div>
// 		</Layout>
//   )
// }

import Link from 'next/link';
import Layout from '@components/layout';

export default function Faecher() {
  return (
    <div>
      <Layout home>
        <div className="flex h-full items-center text-2xl font-ubuntu m-4">
          <div className="font-semibold text-7xl">404</div>
          <div className="p-4 font-medium">
            Bist du dir sicher, dass du hier hin wolltest? Geh mal
            lieber wieder{' '}
            <Link href="/app">
              <a className="hover:text-red-700 transition-colors duration-300">
                zurück zum Start
              </a>
            </Link>
            !
          </div>
        </div>
      </Layout>
    </div>
  );
}