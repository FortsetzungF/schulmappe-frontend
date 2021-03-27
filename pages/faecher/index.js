import Link from 'next/link';
import Layout from '../../components/layout';

export default function Faecher() {
  return (
    <div>
      <Layout home>
        <div className="flex h-full items-center text-2xl font-ubuntu m-4">
          <div className="font-semibold text-7xl">404</div>
          <div className="p-4 font-semibold">
            Fächer?! Bist du dir sicher, dass du hier hin wolltest? Geh mal
            lieber wieder{' '}
            <Link href="/">
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
