import React from "react";

interface CustomDivProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomDivInpuMessageError: React.FC<CustomDivProps> = ({ children, style = {} }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "max-content",
        height:'max-content',
      
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDivInpuMessageError;
