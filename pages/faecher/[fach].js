import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/layout';
import Item from '../../components/item';

export default function Fach() {

  const router = useRouter();
  const { fach } = router.query;

  return (
    <div>
      <Layout>
        <div className="divide-y divide-black">
          <h1 className="text-3xl pb-2 font-ubuntu font-medium">{fach}.</h1>
          <div className="py-4 2xl:p-4">
            <Item>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus totam, ipsa dolorum aliquid asperiores tempora quo
              excepturi minima suscipit voluptates perferendis praesentium
              reiciendis accusamus vero odio hic sapiente. Cupiditate
              repudiandae eveniet exercitationem deserunt culpa ipsa voluptate
              ullam sit tempora odio, eum, quo quisquam, totam consectetur
              voluptas labore optio minus reprehenderit?
            </Item>
            <Item>
              Cupiditate repudiandae eveniet exercitationem deserunt culpa ipsa
              voluptate ullam sit tempora odio, eum, quo quisquam, totam
              consectetur voluptas labore optio minus reprehenderit?
            </Item>
          </div>
        </div>
      </Layout>
    </div>
  );
}
