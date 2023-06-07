import React from 'react'

const ButtonPlay = () => {
  const { title, addClassName, onClick, type } = props;
  return (
    <button
      type={type}
      className={` ${addClassName}  p-2 cursor-pointer`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ButtonPlay