import React, {ReactNode} from "react";
import Navbar from "./Navbar";
interface layoutProps {
  children: ReactNode;
}

function Layout(props: layoutProps) {
  const {children} = props;
  return (
    <main className="bg-slate-950">
      <div className="container">
        <Navbar />
        {children}
      </div>
    </main>
  );
}

export default Layout;
