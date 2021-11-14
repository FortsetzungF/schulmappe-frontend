import Link from "next/link";

export default function Footer() {
	return (
		<div className="relative h-8 2xl:h-5 text-center font-ubuntu font-thin text-gray-500 dark:text-gray-300">
			<div className="absolute inset-x-0 bottom-2 uppercase">
				&copy; 2021 Privatchat!

				<span className="pl-2 normal-case">
					<Link href="https://github.com/FortsetzungF/schulmappe-frontend/issues">
						<a className="hover:text-red-700 transition-colors duration-500">bugs?</a>
					</Link>
				</span>
		    <span className="pl-2 normal-case">
					<Link href="/jobs">
						<a className="hover:text-red-700 transition-colors duration-500">jobs?</a>
					</Link>
				</span>
			</div>
		</div>
	);
}
  
