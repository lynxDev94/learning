import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleOnChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) => {
    state(e.target.value);
  };

  console.log(email);

  return (
    <>
      <form className="flex flex-col justify-center items-center">
        <input
          value={email}
          onChange={(e) => handleOnChangeEvent(e, setEmail)}
          type="email"
          placeholder="Email"
          className="border-black border-2 m-2 p-2"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => handleOnChangeEvent(e, setPassword)}
          placeholder="Password"
          className="border-black border-2 m-2 p-2"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => handleOnChangeEvent(e, setConfirmPassword)}
          placeholder="Confirm Password"
          className="border-black border-2 m-2 p-2"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
