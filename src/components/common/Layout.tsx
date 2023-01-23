import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
		useEffect(() => {
				document.title = `IFV | ${title}`;
		}, [title]);
				
  return <>{children}</>;
};

export default Layout;
