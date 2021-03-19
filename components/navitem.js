import Link from 'next/link';

export default function NavItem({ children }) {
  const lowerCase = children.toLowerCase();
  const link = `faecher/${lowerCase}`;

  return (
    <li className="text-xl py-1">
      <Link href={link}>{children}</Link>
    </li>
  );
}
