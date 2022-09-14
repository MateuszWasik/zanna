import { getSidebarElements } from '../../modules/auth/auth-selectors';
import { DynamicIcon } from '../DynamicIcon/DynamicIcon';
import { useTranslation } from 'react-i18next';

interface SidebarMenuItemsProps {
  isSidebarCollapsed: boolean;
}

export const SidebarMenuItems = ({ isSidebarCollapsed }: SidebarMenuItemsProps) => {
  const { t } = useTranslation();

  return (
    <div className={`h-max px-3 py-12`}>
      {getSidebarElements().map(menuItem => {
        return (
          <div key={menuItem.key} className="flex items-center mb-4 overflow-hidden">
            <DynamicIcon className="flex flex-shrink-0" iconType={menuItem.icon} />
            <span className={`${isSidebarCollapsed ? 'hidden' : 'block ml-2'}`}>
              {t(menuItem.label)}
            </span>
          </div>
        );
      })}
    </div>
  );
};
