import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/Sidebar';

export const Dashboard = () => {
  return (
    <div className="relative w-full h-screen">
      <Navbar />
      <Sidebar />
    </div>
  );
};
