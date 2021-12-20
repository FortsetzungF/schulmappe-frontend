export default function MSG({ children, error }) {

  if (error) {
    return(
      <div className="space-y-1">
        <h2 className="uppercase font-bold text-xl underline underline-offset-4 decoration-red-600">
          Fehler
        </h2>
        <p className="uppercase font-bold text-sm">
          {children}
        </p>
      </div>
    )
  }

  return(
    <div className="space-y-1">
      <p className="uppercase font-bold text-sm">
        {children}
      </p>
    </div>
  )
}