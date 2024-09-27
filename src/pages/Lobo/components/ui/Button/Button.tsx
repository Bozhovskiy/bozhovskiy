import './Button.css';
import React from 'react';

interface ButtonProps {
  label: string;
  secondary?: boolean;
  onClick?: () => void;
  btnStyle?: React.CSSProperties;
  disabled?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, secondary, onClick, btnStyle, disabled, icon }) => {
  return (
    <button
      style={{ ...btnStyle }}
      className={`myBtn ${secondary ? 'secondary' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      <div className="myBtn__label">{label}</div>
    </button>
  );
};

export default Button;
