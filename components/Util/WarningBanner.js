export default function WarningBanner({ children, warning, fatalError, everythingIsFine }) {

  if (fatalError) {  
    return(
      <div className="bg-red-600 p-2 my-4"> 
        <div className="font-bold uppercase text-xl lg:text-2xl text-center">
          {children}
        </div>
      </div>
    )
  }

  if (warning) {  
    return(
      <div className="bg-orange-500 p-2 my-4 text-black"> 
        <div className="font-bold uppercase text-xl lg:text-2xl text-center">
          {children}
        </div>
      </div>
    )
  }

  if (everythingIsFine) {  
    return(
      <div className="bg-lime-500 p-2 my-4 text-black"> 
        <div className="font-bold uppercase text-xl lg:text-2xl text-center">
          {children}
        </div>
      </div>
    )
  }

  return(
      <div className="bg-white p-2 my-4 text-black">
        <div className="font-bold uppercase text-xl lg:text-2xl text-center">
          {children}
        </div>
      </div>
  )

}