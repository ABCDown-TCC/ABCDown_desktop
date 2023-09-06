import React from "react";

interface CustomDivProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const CustomDiv: React.FC<CustomDivProps> = ({ children, style = {} }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default CustomDiv;
