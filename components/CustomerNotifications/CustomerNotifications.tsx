import { IoNotificationsSharp } from 'react-icons/io5';

export const CustomerNotifications = () => {
  return (
    <div className="flex text-white">
      <IoNotificationsSharp size={20} />
      <span className="flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
      </span>
    </div>
  );
};
