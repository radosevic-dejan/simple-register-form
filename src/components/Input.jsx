import { useState } from "react";

export const Input = (props) => {
  const [focused, setFocus] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const { handleChange, errorMessage, ...rest } = props;

  const handleFocus = (e) => {
    setFocus(true);
  };

  // onFocus will work only for password/repeatPassword to warn before submitting if not match
  return (
    <div className="w-[40%] flex flex-col justify-center">
      <input
        className="p-4 my-2 border border-gray-500"
        onChange={(e) => handleChange(e)}
        {...rest}
        onBlur={handleFocus}
        onFocus={() => rest.name === "confirmPassword" && setFocus(true)}
        focused={focused.toString()}
        onInvalid={e => console.log(e)}
      />
      <span
        className= "text-red-500"
      >
        { errorMessage }
      </span>
    </div>
  );
};
