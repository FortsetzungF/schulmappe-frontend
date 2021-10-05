import Link from "next/link";
import Layout from '../components/layout';
import NewsItem from "../components/NewsItem";

export default function News() {
  return (
    <div>
			<Layout home>
				<div className="divide-y divide-black dark:divide-white">
						<h1 className="text-3xl pb-2 font-ubuntu font-medium">news.</h1>
						<div className="py-4 2xl:p-4">
							<NewsItem>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Temporibus totam, ipsa dolorum aliquid asperiores tempora quo
								excepturi minima suscipit voluptates perferendis praesentium
								reiciendis accusamus vero odio hic sapiente. Cupiditate
								repudiandae eveniet exercitationem deserunt culpa ipsa voluptate
								ullam sit tempora odio, eum, quo quisquam, totam consectetur
								voluptas labore optio minus reprehenderit?
							</NewsItem>
						</div>
					</div>
			</Layout>
    </div>
  );
}
