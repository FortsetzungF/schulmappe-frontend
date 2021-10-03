export default function AccountHeader() {
    function login() {
        console.log("worked");
    }
    return (
      <div className="text-xl">
        <button onClick={login}>login.</button>
      </div>
    );
  }