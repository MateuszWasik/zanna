interface SidebarProps {
  isSidebarCollapsed: boolean;
}

export const Sidebar = ({ isSidebarCollapsed }: SidebarProps) => {
  return (
    <aside
      className={`flex flex-shrink-0 flex-col border-r transition-width duration-700
      ${isSidebarCollapsed ? 'w-12' : 'w-64'} `}
    />
  );
};
