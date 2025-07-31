import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      {...props}
      className={
        `border border-gray-300 rounded-md px-4 py-2 font-medium text-gray-900
         hover:bg-gray-100 active:bg-gray-200 transition-colors
         focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400
         ${className}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
