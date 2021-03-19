import Menu from './menu';

export default function Layout({ children }) {
  return (
    <div className="mx-32 my-10 border-2 border-black">
      <div className="p-4 divide-y-2 divide-gray-700">
        <header>
          <h1 className="text-6xl font-semibold font-ubuntu pb-4">
            schulmappe.
          </h1>
        </header>
        <main>
          <div className="grid grid-cols-7 gap-4 py-4 divide-x divide-gray-500">
            <div className="col-span-1 px-4">
              <Menu />
            </div>
            <div className="col-span-4 text-xl px-4">{children}</div>
            <div className="col-span-2 text-xl px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quae nam et, tempora totam saepe dignissimos vero officia
              molestias, ipsa iste repudiandae recusandae, eius quis earum vitae
              deserunt dolorum tenetur eos minima perspiciatis? Obcaecati
              praesentium veniam corrupti sed! Placeat voluptatem assumenda
              impedit laboriosam quibusdam omnis quae dignissimos iste ipsum
              nemo.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
