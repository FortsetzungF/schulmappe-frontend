import Link from "next/link"

export default function Jobs() {
	return (
		<div className="dark:bg-black dark:text-white dark:border-white min-h-screen">
      <div className="m-auto md:w-2/5 p-6 md:pt-24">
			  <div>
          <h1 className="font-ubuntu font-semibold text-8xl md:text-8xl italic">Jobs?</h1>
          <p className="text-2xl italic font-semibold py-2 md:text-2xl md:py-4">
            Du möchtest bei uns arbeiten?
          </p>
          <p className="text-xl italic py-2 md:text-2xl md:py-4">
            Wirklich bei UNS arbeiten?!
          </p>
          <p className="text-xl pt-2 md:text-2xl md:py-4">
            Naja, wenn du wirklich so überzeugt davon bist hier arbeiten zu wollen, müssen wir dich "leider" enttäuschen.
            Wir stellen keine Leute an weil wir insgeheim eh nicht an dieses Projekt glauben, 
            also dass es wirklich irgendwann fertig ist. Aber wenn du uns mal ne E-Mail schreiben willst, 
            überleg mal wo du die finden könntest und wir sind gespannt auf deine E-Mail.
          </p>
        </div>
        <div className="pt-12 font-mono italic text-xl">
          <Link href=".">
						<a className="hover:text-red-700 transition-colors duration-500">zurück.</a>
					</Link>
        </div>
      </div>
		</div>
	);
}
