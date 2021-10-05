import Link from "next/link";
import HomeLayout from '../components/homeLayout';

export default function Home() {
  return (
    <div>
      <HomeLayout home>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cupiditate
          itaque tempora laborum quas expedita, accusantium alias adipisci natus
          quod, error tempore! Quasi, ex esse architecto exercitationem nulla iure
          nihil sed officiis repudiandae! Culpa autem deleniti voluptas maiores.
          Doloribus nostrum suscipit placeat, repudiandae consectetur praesentium
          debitis et harum eligendi blanditiis iusto illo! Quo quas cumque esse
          nostrum maiores eaque sapiente, eveniet culpa nemo nihil amet doloremque
          neque hic suscipit! Iure dignissimos maxime assumenda est doloribus,
          ipsa corporis. Itaque veniam pariatur ratione vitae natus voluptatibus
          libero consequatur, voluptatem a recusandae, quisquam deleniti quos
          error earum nulla esse. Aut iusto quae distinctio.

          <div className="text-center font-bold">
            <Link href="news">
              <a className="hover:text-red-700 transition-colors duration-300">Übersicht</a>
            </Link>
          </div>
        </p>
      </HomeLayout>
    </div>
  );
}
