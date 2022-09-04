import { FiLogOut, FiSettings } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';

export const CustomerExpandableList = () => {
  return (
    <div className="absolute top-full w-52 h-auto rounded-md shadow-md bg-gray-50">
      <div className="flex flex-col mb-2 p-3 border-b border-b-gray-200">
        <span className="text-xs">Signed as:</span>
        <span>Mateusz</span>
      </div>
      <ul className="p-3">
        <li className="flex items-center pt-0 pb-1">
          <RiLockPasswordLine />
          <span className="ml-3">Change password</span>
        </li>
        <li className="flex items-center py-1">
          <FiSettings />
          <span className="ml-3">Settings</span>
        </li>
        <li className="flex items-center py-1 ">
          <FiLogOut />
          <span className="ml-3">Sign out</span>
        </li>
      </ul>
    </div>
  );
};
