export default function AccountHeader() {
    function login() {
        console.log("worked");
    }
    return (
      <div className="text-xl">
        <button onClick={login}>
          <a className="hover:text-red-700 transition-colors duration-500">
            login.
          </a>
        </button>
      </div>
    );
  }