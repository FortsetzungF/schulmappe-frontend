import useSWR from 'swr'

export default function Warning() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/warning', fetcher)

  if (error) return (
    <h2 className="text-center text-xl md:text-2xl bg-red-500 mb-2 p-2 font-semibold">
      failed to load warning.
    </h2>
  );

  if (!data.warning) return null

  return (
    <h2 className="text-center text-xl md:text-2xl bg-red-500 mb-2 p-2 font-semibold">
      {data.warning}
    </h2>
  );
}
