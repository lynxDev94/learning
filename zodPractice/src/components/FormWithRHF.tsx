import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type TSignUpSchema, signUpSchema } from "../../lib/types";

function FormWithRHF() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="border-black border-2 m-2 p-2"
        />
        {errors.email && <p>{errors.email.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border-black border-2 m-2 p-2"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="border-black border-2 m-2 p-2"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
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
