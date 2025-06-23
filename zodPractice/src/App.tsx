import "./App.css";

function App() {
  return (
    <>
      <form className="flex flex-col justify-center items-center">
        <input
          type="email"
          placeholder="Email"
          className="border-black border-2 m-2 p-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="border-black border-2 m-2 p-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border-black border-2 m-2 p-2"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
