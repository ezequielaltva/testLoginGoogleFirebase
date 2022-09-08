import { signInWithGoogle, signOut } from "./Firebase";

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src={localStorage.getItem("profilePic")} />
      <button onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

export default App;
