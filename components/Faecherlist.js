import FaecherlistItem from "@components/FaecherlistItem";

export default function Faecherlist() {
  return(
    <div>
      <div className="font-extrabold italic uppercase">
        <h2 className="text-2xl lg:text-4xl">faecher</h2>
      </div>

      <FaecherlistItem>mathe.</FaecherlistItem>
      <FaecherlistItem>physik.</FaecherlistItem>
      <FaecherlistItem>informatik.</FaecherlistItem>
    </div>
  )
}