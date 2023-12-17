import React, { Fragment, useState } from "react";

import AdminNavber from "../partials/AdminNavber";
import AdminSidebar from "../partials/AdminSidebar";
import AdminFooter from "../partials/AdminFooter";

const AdminLayout = ({ children }) => {
const [isSidebarVisible, setSidebarVisible] = useState(false);
// console.log('Layout Sidebar visibility:', isSidebarVisible);
  return (
    <Fragment>
      <AdminNavber setSidebarVisible={setSidebarVisible} />
      <section className="flex bg-gray-100">
        <AdminSidebar isSidebarVisible={isSidebarVisible} />
        <div className="w-full md:w-11/12 h-full">
          {/* All Children pass from here */}
          {children}
        </div>
      </section>
      <AdminFooter />
    </Fragment>
  );
};

export default AdminLayout;
