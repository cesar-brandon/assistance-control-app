import React from "react";

interface Props {
  message: string;
  type: string;
}

const Alert: React.FC<Props> = ({ message, type }) => {
  return (
    <div className={`Alert ${type}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
        />
      </svg>
      <p>{message}</p>
    </div>
  );
};

export default Alert;
