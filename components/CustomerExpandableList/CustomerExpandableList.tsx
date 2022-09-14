import { FiLogOut } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

export const CustomerExpandableList = () => {
  const { t } = useTranslation();

  return (
    <div
      className={`absolute top-16 right-4 w-52 h-auto rounded-md shadow-m text-white bg-blue-500`}
    >
      <div className="flex flex-col mb-2 p-3 border-b border-b-gray-200">
        <span className="text-xs">{t('NAVBAR.CUSTOMER_LIST.SIGNED_AS')}</span>
        <span>John Smith</span>
      </div>
      <ul className="p-3">
        <li className="flex items-center pt-0 pb-1">
          <RiLockPasswordLine />
          <span className="ml-3">{t('NAVBAR.CUSTOMER_LIST.CHANGE_PASSWORD')}</span>
        </li>
        <li className="flex items-center py-1 ">
          <FiLogOut />
          <span className="ml-3">{t('NAVBAR.CUSTOMER_LIST.SIGN_OUT')}</span>
        </li>
      </ul>
    </div>
  );
};
