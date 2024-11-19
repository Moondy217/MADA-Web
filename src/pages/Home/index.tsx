import Header from '../../commons/components/Header';

/* 
  메인 페이지
*/

export default function HomePage() {
  return (
    <>
      <Header title="HOME" />
      <div className="gap-3 flex flex-col justify-center items-center w-full h-[calc(100%-96px)]">
        메인페이지
      </div>
    </>
  );
}
