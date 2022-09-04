import { IoChevronDown } from 'react-icons/io5';
import { useState } from 'react';

export const CustomerAvatar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = () => {
    setExpanded(prev => !prev);
  };

  return (
    <>
      <div className="flex items-center w-10 h-10 mr-4 cursor-pointer" onClick={handleOnClick}>
        <img className="rounded-full mr-1" src="https://thispersondoesnotexist.com/image" alt="" />
        <div className="text-white">
          <IoChevronDown />
        </div>
      </div>
      {expanded && <div className="absolute top-full w-36 h-52 shadow-md bg-gray-200-600"></div>}
    </>
  );
};
