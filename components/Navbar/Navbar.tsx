import { CustomerAvatar } from '../CustomerAvatar/CustomerAvatar';
import { LanguageSelectors } from '../LanguageSelectors/LanguageSelectors';
import { CustomerNotifications } from '../CustomerNotifications/CustomerNotifications';
import { WelcomeSequence } from '../WelcomeSequence/WelcomeSequence';
import { GiHamburgerMenu } from 'react-icons/gi';

interface NavbarProps {
  isSidebarCollapsed: boolean;
  handleSidebarCollapse: () => void;
}

export const Navbar = ({ handleSidebarCollapse, isSidebarCollapsed }: NavbarProps) => {
  return (
    <nav className="flex-1">
      <div className="relative flex justify-end items-center max-w h-14 pr-5 pl-5 bg-blue-600">
        <GiHamburgerMenu
          className={`absolute text-white left-0 ml-4 cursor-pointer transition duration-700 ${
            isSidebarCollapsed && 'transition rotate-90'
          }`}
          size={20}
          onClick={handleSidebarCollapse}
        />

        <div className="flex justify-end w-20 mr-4 invisible animate-fadeIn animation-delay-4000">
          <LanguageSelectors />
          <CustomerNotifications />
        </div>
        <div className="absolute justify-end right-20 animate-fadeOut">
          <WelcomeSequence />
        </div>

        <CustomerAvatar />
      </div>
    </nav>
  );
};
