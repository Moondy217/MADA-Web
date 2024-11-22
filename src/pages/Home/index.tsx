import { useState } from 'react';
import Header from '../../commons/components/Header';
import Side from '../../commons/components/Side';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header title="HOME" />
      <div className="gap-3 flex flex-col justify-center items-center w-full h-[calc(100%-96px)]">
        메인 페이지
        <Side isMenu={true} serviceClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>
    </>
  );
}
