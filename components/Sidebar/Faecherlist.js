import useSWR from "swr";
import FaecherlistItem from "@/components/Sidebar/FaecherlistItem";
import MSG from "@/components/Util/MSG"

export default function Faecherlist() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/faecher', fetcher)

  if (error) return <MSG error>faecher konnten nicht geladen werden</MSG>
  if (!data) return <MSG>loading faecher</MSG>

  return(
    <div>
      <ul>
        {data.faecher.map((fach) =>
          <li>
            <FaecherlistItem>{fach}</FaecherlistItem>
          </li>
        )}
      </ul>
    </div>
  )
}