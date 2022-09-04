import { CustomerAvatar } from '../CustomerAvatar/CustomerAvatar';
import { LanguageSelectors } from '../LanguageSelectors/LanguageSelectors';
import { CustomerNotifications } from '../CustomerNotifications/CustomerNotifications';
import { WelcomeSequence } from '../WelcomeSequence/WelcomeSequence';

export const Navbar = () => {
  return (
    <div>
      <div className="relative flex justify-end items-center max-w h-14 pr-5 pl-5 bg-blue-600">
        <div className="flex justify-end w-20 mr-4 invisible animate-fadeIn animation-delay-4000">
          <LanguageSelectors />
          <CustomerNotifications />
        </div>
        <div className="absolute right-20 animate-fadeOut">
          <WelcomeSequence />
        </div>

        <CustomerAvatar />
      </div>
    </div>
  );
};
