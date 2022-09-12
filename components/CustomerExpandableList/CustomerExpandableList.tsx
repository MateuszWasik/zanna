import { FiLogOut, FiSettings } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';

interface CustomerExpandableListProps {
  expanded: boolean;
}

export const CustomerExpandableList = ({ expanded }: CustomerExpandableListProps) => {
  return (
    <div
      className={`absolute top-14 w-52 right-0 rounded-md shadow-m bg-gray-50 ${
        expanded ? 'h-auto opacity-100' : 'opacity-0'
      } transition-opacity duration-700 ease-in-out`}
    >
      <div className="flex flex-col mb-2 p-3 border-b border-b-gray-200">
        <span className="text-xs">Signed as:</span>
        <span>John Smith</span>
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
