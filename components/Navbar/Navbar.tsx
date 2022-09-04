import { CustomerAvatar } from '../CustomerAvatar/CustomerAvatar';
import { LanguageSelectors } from '../LanguageSelectors/LanguageSelectors';
import { CustomerNotifications } from '../CustomerNotifications/CustomerNotifications';
import { WelcomeSequence } from '../WelcomeSequence/WelcomeSequence';

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-end items-center max-w h-20 pr-5 pl-5 bg-blue-600">
        <div className="flex content-end w-20 mr-1 invisible animate-fadeIn animation-delay-4000">
          <LanguageSelectors />
          <CustomerNotifications />
        </div>
        <div className="animate-fadeOut">
          <WelcomeSequence />
        </div>

        <CustomerAvatar />
      </div>
    </div>
  );
};
