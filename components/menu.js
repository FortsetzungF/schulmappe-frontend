import useSWR from 'swr'
import NavItem from './navitem';

export default function Menu() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR('/api/faecher', fetcher)

  if (error) return <div>failed to load faecher</div>
  if (!data) return <div>loading faecher</div>

  return (
    <div className="font-ubuntu text-center lg:text-left ">
      <ul className="divide-y divide-gray-500 dark:divide-gray-500">
        {data.faecher.map((fach) => 
          <NavItem>{fach}</NavItem>
        )}

        {/* <NavItem>Deutsch</NavItem>
        <NavItem>Mathe</NavItem>
        <NavItem>Englisch</NavItem>
        <NavItem>Französisch</NavItem>
        <NavItem>Latein</NavItem>
        <NavItem>Spanisch</NavItem>
        <NavItem>Kunst</NavItem>
        <NavItem>Geschichte</NavItem>
        <NavItem>Musik</NavItem>
        <NavItem>Politik-Wirtschaft</NavItem>
        <NavItem>Erdkunde</NavItem>
        <NavItem>Biologie</NavItem>
        <NavItem>Chemie</NavItem>
        <NavItem>Physik</NavItem>
        <NavItem>Informatik</NavItem>
        <NavItem>Philosophie</NavItem>
        <NavItem>Religion</NavItem>
        <NavItem>WeNo</NavItem> */}
      </ul>
    </div>
  );
}
