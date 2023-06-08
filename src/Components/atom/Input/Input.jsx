import React from "react";

const Input = (props) => {
  const { type, onChange, placeHolder, addClassName ,autoComplete, name} = props;
  return (
    <input
      name={name}
      onChange={onChange}
      className={`${addClassName }`}
      type={type}
      placeholder={placeHolder}
      autoComplete={autoComplete}
    />

    // <div>
    //   <input
    //     onChange={onChange}
    //     name={name}
    //     type={type}
    //     className={` ${addClassName} bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400`}
    //     placeholder={placeHolder}
    //   ></input>
    // </div>
  );
};

export default Input;
