import NavItem from './navitem';

export default function Menu({ children }) {
  return (
    <div className="font-ubuntu text-center 2xl:text-left">
      <ul className="divide-y divide-gray-500">
        <NavItem>Deutsch</NavItem>
        <NavItem>Englisch</NavItem>
        <NavItem>Französisch</NavItem>
        <NavItem>Latein</NavItem>
        <NavItem>Spanisch</NavItem>
        <NavItem>Kunst</NavItem>
        <NavItem>Musik</NavItem>
        <NavItem>Politik-Wirtschaft</NavItem>
        <NavItem>Geschichte</NavItem>
        <NavItem>Erdkunde</NavItem>
        <NavItem>Wirtschaftslehre</NavItem>
        <NavItem>Religion</NavItem>
        <NavItem>WeNo</NavItem>
        <NavItem>Philosophie</NavItem>
        <NavItem>Mathematik</NavItem>
        <NavItem>Physik</NavItem>
        <NavItem>Chemie</NavItem>
        <NavItem>Biologie</NavItem>
        <NavItem>Informatik</NavItem>
        <NavItem>Sport</NavItem>
      </ul>
    </div>
  );
}
