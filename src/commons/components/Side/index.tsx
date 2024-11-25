import { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';

interface SideProps {
  isMenu?: boolean;
  serviceClick?: () => void;
}

export default function Side({ serviceClick }: SideProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    serviceClick?.();
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 
        h-screen 
        bg-main 
        shadow-lg
        transition-all duration-300 ease-in-out
        ${isExpanded ? 'w-60' : 'w-20'}
      `}
    >
      <div className="flex h-20 items-center justify-between">
        <button
          onClick={toggleSidebar}
          className={`
            p-2 rounded-full transition-all duration-300
            ${isExpanded ? 'ml-48' : 'ml-4'}
          `}
        >
          <MenuIcon />
        </button>
      </div>

      {/* 사이드바 내용 */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}
          px-4
        `}
      >
        <div className="space-y-4">
          <div>메뉴 항목 1</div>
          <div>메뉴 항목 2</div>
          <div>메뉴 항목 3</div>
        </div>
      </div>
    </aside>
  );
}
