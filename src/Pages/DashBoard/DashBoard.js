import React from "react";
import useTitle from "../../hooks/useTitle";

const DashBoard = () => {
  useTitle("DashBoard");
  return (
    <div>
      <h3 className="text-center font-bold text-2xl my-12">
        This Is BashBoard
        <br />
        Click Your <strong className="hidden md:block">Left Sidebar </strong>
        <strong className="lg:hidden">Top Right Bar</strong>
      </h3>
    </div>
  );
};

export default DashBoard;
