export default function Item({ children }) {
  return (
    <div className="border border-gray-500 p-2 mb-4 dark:border-gray-300">
      <div className="divide-y divide-gray-300 dark:divide-gray-500">
        <div className="font-ubuntu font-bold">
          <h1>Lorem ipsum dolor sit amet. </h1>
          <div className="font-normal text-base text-gray-700 dark:text-gray-300">27.03.2021</div>
        </div>
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}
