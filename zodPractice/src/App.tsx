import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOnChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) => {
    state(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // send to the server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <input
          value={email}
          required
          onChange={(e) => handleOnChangeEvent(e, setEmail)}
          type="email"
          placeholder="Email"
          className="border-black border-2 m-2 p-2"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => handleOnChangeEvent(e, setPassword)}
          placeholder="Password"
          className="border-black border-2 m-2 p-2"
        />
        <input
          required
          type="password"
          value={confirmPassword}
          onChange={(e) => handleOnChangeEvent(e, setConfirmPassword)}
          placeholder="Confirm Password"
          className="border-black border-2 m-2 p-2"
        />
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </>
  );
}

export default App;
