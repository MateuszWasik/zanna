import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import EnglishFlagLogo from '../../public/assets/images/EnglishFlagIcon.png';
import PolishFlagIcon from '../../public/assets/images/PolishFlagIcon.png';

export const LanguageSelectors = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex text-white mr-2">
      <div
        className="mr-4 w-5 h-5 max-h-1 cursor-pointer"
        onClick={() => i18n.changeLanguage('en')}
      >
        <Image width="100%" height="100%" src={EnglishFlagLogo.src} alt="" />
      </div>
      <div
        className="mr-4 w-5 h-5 max-h-1 cursor-pointer"
        onClick={() => i18n.changeLanguage('pl')}
      >
        <Image width="100%" height="100%" src={PolishFlagIcon.src} alt="" />
      </div>
    </div>
  );
};
