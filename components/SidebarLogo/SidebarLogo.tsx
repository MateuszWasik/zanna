import Image from 'next/image';
import ZannaLogo from '../../public/assets/images/ZannaLogo.png';

export const SidebarLogo = () => {
  return (
    <div className="h-14 flex items-center flex-shrink-0 overflow-hidden">
      <div className="flex flex-shrink-0 w-14 h-14">
        <Image
          src={ZannaLogo.src}
          width="100%"
          height="100%"
          alt=""
          className="flex flex-shrink-0"
        />
      </div>
      <span>ZANNA</span>
    </div>
  );
};
