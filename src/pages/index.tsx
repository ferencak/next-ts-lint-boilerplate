import type { NextPage } from 'next';

import PageLayout from 'components/layouts/PageLayout';

const Home: NextPage = (): JSX.Element => {
  return (
    <PageLayout title="Hlavní stránka">
      <div className="flex flex-col lg:flex-row w-full gap-10 h-full items-center justify-center lg:justify-between">
        <div className="flex flex-col w-full lg:w-1/2 h-auto lg:h-full items-center lg:items-start justify-center">
          <h1 className="text-5xl text-white font-black uppercase">Sledujte nejnovější filmy a seriály z pohodlí domova</h1>
          <h2 className="text-2xl text-[#db2828] font-black uppercase">To vše a mnohem více</h2>
        </div>
        <div className="flex flex-col w-3/4 lg:w-1/3 items-center justify-center">
          <div className="flex flex-col w-full items-center justify-center gap-5">
            <h1 className="text-white text-2xl font-bold uppercase text-center">
              Vytvořte si účet a získejte VIP členství na měsíc zdarma
            </h1>
            <div className="flex flex-row gap-2 w-full h-auto lg:h-full items-center justify-center">
              <button className="bg-[#ffffff] hover:bg-[#fff2f2] text-base lg:text-md duration-75 text-black font-bold py-4 lg:py-4 px-9 rounded-full rounded-r-none">
                Účet zdarma
              </button>
              <button className="flex flex-col items-center bg-[#db2828] hover:bg-[#ee3434] text-base lg:text-md duration-75 text-white font-bold py-2 lg:py-2 px-9 rounded-full rounded-l-none">
                <span>VIP členství</span>
                <span className="text-xs">1 Měsíc zdarma</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
