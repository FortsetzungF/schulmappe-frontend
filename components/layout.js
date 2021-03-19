import Menu from './menu';

export default function Layout({ children }) {
  return (
    <div>
      <div className="m-2 2xl:mx-32 2xl:my-5 border-2 border-black">
        <div className="p-4 divide-y-2 divide-gray-700">
          <header>
            <h1 className="text-4xl lg:text-5xl font-semibold font-ubuntu pb-4">
              schulmappe.
            </h1>
          </header>
          <main>
            <div className="grid 2xl:grid-cols-7 gap-4 2xl:py-4 divide-y-2 2xl:divide-y-0 2xl:divide-x divide-gray-600">
              <div className="2xl:col-span-1 px-4">
                <Menu />
              </div>
              <div className="2xl:col-span-4 text-xl py-4 2xl:px-4">
                {children}
              </div>
              <div className="2xl:col-span-2 text-xl py-4 2xl:px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quae nam et, tempora totam saepe dignissimos vero officia
                molestias, ipsa iste repudiandae recusandae, eius quis earum
                vitae deserunt dolorum tenetur eos minima perspiciatis?
                Obcaecati praesentium veniam corrupti sed! Placeat voluptatem
                assumenda impedit laboriosam quibusdam omnis quae dignissimos
                iste ipsum nemo.
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative h-8 2xl:h-5 text-center font-mono">
        <div className="absolute inset-x-0 bottom-2">
          Made with ❤ by{' '}
          <a
            href="https://fortsetzungf.vercel.app"
            className="hover:text-red-700 transition-colors duration-500"
          >
            FortsetzungF
          </a>
        </div>
      </div>
    </div>
  );
}
