import "./App.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  channel: string;
  username: string;
  email: string;
};

function App() {
  const form = useForm<FormValues>({
    defaultValues:{
      username: "Batman",
      channel: "",
      email: ""
    }
  });
  const { register, control, handleSubmit, formState } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form Submitted", data);
  };
  return (
    <>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        ></input>
        <p>{formState.errors?.username?.message}</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")}></input>
        <p className="error">{formState.errors?.email?.message}</p>
        <label htmlFor="channel">channel</label>
        <input
          type="text"
          id="channel"
           {...register("channel", {
            required: {
              value: true,
              message: "channel is required",
            },
          })}
        />
        <p>{formState.errors?.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default App;
