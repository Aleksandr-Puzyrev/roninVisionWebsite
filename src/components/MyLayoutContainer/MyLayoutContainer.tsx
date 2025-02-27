import React, { ReactNode } from "react";

interface MyLayoutContainerProps {
  children: ReactNode;
}

const MyLayoutContainer = ({ children }: MyLayoutContainerProps) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default MyLayoutContainer;
