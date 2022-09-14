import Image from 'next/image';
import ZannaLogo from '../../public/assets/images/ZannaLogo.png';

interface SidebarLogoProps {
  isSidebarCollapsed: boolean;
}

export const SidebarLogo = ({ isSidebarCollapsed }: SidebarLogoProps) => {
  return (
    <div className="h-14 flex justify-center items-center">
      {isSidebarCollapsed ? (
        <Image src={ZannaLogo.src} width="56px" height="56px" alt="" />
      ) : (
        <span>ZANNA</span>
      )}
    </div>
  );
};
