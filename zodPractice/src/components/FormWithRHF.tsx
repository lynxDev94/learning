import { useForm, type FieldValues } from "react-hook-form";



type FormValues = {
  password: string
  confirmPassword: string,
  email: string
}

function FormWithRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormValues>();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };
console.log(errors);
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <input
          {...register("email", {
            required: "Email is Required",
          })}
          type="email"
          placeholder="Email"
          className="border-black border-2 m-2 p-2"
        />
        {errors.email && (
          <p>{errors.email.message}</p>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 10,
              message: "Password must be at least 10 characters",
            },
          })}
          type="password"
          placeholder="Password"
          className="border-black border-2 m-2 p-2"
        />
        <input
          {...register("confirmPassword", {
            required: "Confirm password is Rquired",
          })}
          type="password"
          placeholder="Confirm Password"
          className="border-black border-2 m-2 p-2"
        />
        <button
        disabled={isSubmitting}
          type="submit"
          className={` ${isSubmitting ? "bg-amber-400" : "bg-red-500"}`}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default FormWithRHF;
