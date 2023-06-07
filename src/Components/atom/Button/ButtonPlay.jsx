import React from 'react'

const ButtonPlay = (props) => {
  const { title, addClassName, onClick, type } = props;
  return (
    <button
    type={type}
      className={` ${addClassName}  py-2 px-5 cursor-pointer`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default ButtonPlay