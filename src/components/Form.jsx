import { useRef, useState } from "react";
import { Input } from "./Input";

export const Form = () => {
  const [ formData, setFormData ] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      required: true,
      pattern: "^[a-zA-Z0-9]{3,10}$",
      errorMessage: " Username must be between 3-10 characters and only contain letters and numbers"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
      errorMessage: "Enter a valid email address"
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage: "Password must be between 8-16 characters and must contain at least one number, one letter and one special character"
    },
    {
      id: 4,
      name: "repeatPassword",
      type: "password",
      placeholder: "Repeat Password",
      required: true,
      pattern: formData.password,
      errorMessage: "Passwords must match"
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="flex flex-col content-center mt-4">
      <h3 className="text-center my-2 text-slate-800 font-bold">Register</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center"
      >
        {
          inputs.map(input => {
            return <Input key={input.id} {...input} value={formData[input.name]} handleChange={handleChange} />
          })
        }
        <button className="text-slate-700 font-bold uppercase border border-blue-500 px-4 py-2 mt-1">
          Submit
        </button>
      </form>
    </div>
  );
};
