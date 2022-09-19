import { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import { Navbar } from '../Navbar/Navbar';
import { Dashboard } from '../Dashboard/Dashboard';

export const ZanaMainDashboard = () => {
  const [sidebarCollapsed, setSideBarCollapsed] = useState(false);

  const handleSidebarCollapse = () => {
    setSideBarCollapsed(prev => !prev);
  };
  return (
    <div className="flex overflow-x-hidden h-screen">
      <Sidebar isSidebarCollapsed={sidebarCollapsed} />
      <div className="flex-1">
        <Navbar
          isSidebarCollapsed={sidebarCollapsed}
          handleSidebarCollapse={handleSidebarCollapse}
        />
        <Dashboard />
      </div>
    </div>
  );
};
