import Header from '../../commons/components/Header';
import SplashLogo from './assets/SplashLogo';

export default function HomePage() {
  return (
    <>
      <Header title="" />
      <div className="gap-3 flex flex-col items-center w-full h-[calc(100%-96px)]">
        <div className="mt-[75px] flex flex-col items-center justify-center">
          <SplashLogo />
          <div className="mt-[12px] text-center">매일마다 작성하는 일정관리 서비스</div>
        </div>
      </div>
    </>
  );
}
