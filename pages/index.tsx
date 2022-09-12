import { NextPage } from 'next';
import { Dashboard } from '../components/Dashboard/Dashboard';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';

const Home: NextPage = () => {
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

export default Home;
