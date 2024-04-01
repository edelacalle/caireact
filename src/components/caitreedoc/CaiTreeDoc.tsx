/*
import React from "react";
import "./Button.scss";

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  label: string;
}

const Button = ({label, ...others}: ButtonProps) => {
  return <button {...others}>{label}</button>;
};

export default Button;

*/
import {Button} from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";


import React from "react";
const CaiTreeDoc = ({label, ...others}: any) => {
 // return <button {...others}>{label}</button>;
 return <Button {...others}>{label}</Button>;
};

export default CaiTreeDoc;
