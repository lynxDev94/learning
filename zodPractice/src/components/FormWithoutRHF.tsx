import React, { useState } from "react";

function FormWithoutRHF() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleOnChangeEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
    state: React.Dispatch<React.SetStateAction<string>>
  ) => {
    state(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Your passwords do not match"]);
      setIsSubmitting(false);
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    setErrors([]);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        {errors.length >= 0 && (
          <ul>
            {errors.map((error) => (
              <li>{error}</li>
            ))}
          </ul>
        )}
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
        <button
          type="submit"
          disabled={isSubmitting}
          className={` ${isSubmitting ? "bg-amber-400" : "bg-red-500"}`}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default FormWithoutRHF;
