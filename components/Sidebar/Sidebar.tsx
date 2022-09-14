import { SidebarLogo } from '../SidebarLogo/SidebarLogo';
import { SidebarMenuItems } from '../SidebarMenuItems/SidebarMenuItems';

interface SidebarProps {
  isSidebarCollapsed: boolean;
}

export const Sidebar = ({ isSidebarCollapsed }: SidebarProps) => {
  return (
    <aside
      className={`flex flex-shrink-0 flex-col border-r transition-width duration-700
      ${isSidebarCollapsed ? 'w-14' : 'w-60'} `}
    >
      <SidebarLogo isSidebarCollapsed={isSidebarCollapsed} />
      <SidebarMenuItems isSidebarCollapsed={isSidebarCollapsed} />
    </aside>
  );
};
