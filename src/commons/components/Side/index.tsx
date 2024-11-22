import { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';

interface SideProps {
  isMenu?: boolean;
  serviceClick?: () => void;
}

export default function Side({ isMenu, serviceClick }: SideProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    serviceClick?.();
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-5 left-5 z-50 p-2 hover:bg-gray-100 rounded-full"
      >
        <MenuIcon />
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen w-20 bg-main border-r border-[rgba(249,249,249,0.8)] 
        transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="w-full h-headerHeigth flex justify-center items-center border-b border-[rgba(249, 249, 249, 0.8)]">
          {isMenu && <div className="p-4">{/* 사이드바 내용 */}</div>}
        </div>
      </aside>
    </>
  );
}
