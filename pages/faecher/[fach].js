import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function Fach() {
  const router = useRouter();
  const { fach } = router.query;

  return (
    <div>
      <Layout>
        <div className="divide-y divide-gray-500">
          <h1 className="text-3xl pb-2 font-ubuntu font-medium">{fach}.</h1>
          <div className="py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit quae
            obcaecati vitae dolorem aliquam rerum quas voluptatibus est? Sit
            doloremque rem quo nihil possimus hic ullam. Error mollitia debitis
            tempora esse quaerat, odit commodi voluptatem iusto quas magni
            doloribus velit! Dolores, neque. Inventore consectetur suscipit
            mollitia optio fuga, reiciendis quis.
          </div>
        </div>
      </Layout>
    </div>
  );
}
