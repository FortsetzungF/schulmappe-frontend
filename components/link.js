import Link from 'next/link';

export default function Layout({ children, href }) {
  return (
    <Link href={href}>
      <a className="hover:text-red-700 transition-colors duration-500 hover:underline">
        {children}
      </a>
    </Link>
  );
}
