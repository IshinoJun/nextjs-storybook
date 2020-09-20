import * as React from "react";

interface Props {
  text:string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & Props;

const Button: React.FC<ButtonProps> = (props:ButtonProps) => {
  const { text } = props;

  return (
    <button {...props}>{text}</button>
  );
};

export default Button;
