import { MdCompareArrows, MdDashboard } from 'react-icons/md';

interface DynamicIconProps {
  iconType?: string;
  className?: string;
}

export const DynamicIcon = ({ iconType, className }: DynamicIconProps) => {
  switch (iconType) {
    case 'MdDashboard':
      return <MdDashboard size={30} color="blue" className={className} />;
    case 'MdCompareArrows':
      return <MdCompareArrows size={30} color="blue" className={className} />;
    default:
      return null;
  }
};
