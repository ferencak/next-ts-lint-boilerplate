import type { NextPage } from 'next';

import Input from 'components/atoms/form/Input';
import PageLayout from 'components/layouts/PageLayout';

const SignIn: NextPage = (): JSX.Element => {
  return (
    <PageLayout title="Přihlásit se">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="flex flex-col w-2/5 h-full items-center justify-center">
          <div className="flex flex-col w-full h-auto bg-white/10 rounded-3xl justify-between gap-10 py-10 px-12 shadow-2xl">
            <h1 className="text-xl lg:text-3xl text-white font-bold text-center uppercase">Pro pokračování se přihlašte</h1>
            <div className="flex flex-col w-full gap-5">
              <Input
                placeholder="jan@novak.cz"
                label="Emailová adresa"
                className="w-full rounded-lg bg-white/10 !p-4 border-none text-white focus:bg-white/20"
                type="password"
                onChange={() => null}
              />
              <Input
                placeholder="••••••••••••"
                label="Vaše heslo"
                className="w-full rounded-lg bg-white/10 !p-4 border-none text-white focus:bg-white/20"
                type="password"
                onChange={() => null}
              />
            </div>
            <div className="flex w-full items-center justify-between gap-5">
              <div className="flex flex-col gap-1">
                <a className="text-white/50 hover:text-white duration-75 text-xs font-bold cursor-pointer">
                  Obnova zapomenutého hesla
                </a>
                <a className="text-white/50 hover:text-white duration-75 text-xs font-bold cursor-pointer">Přejít k registraci</a>
              </div>
              <button className="bg-[#db2828] hover:bg-[#ee3434] duration-75 text-white font-bold py-4 px-4 rounded-full w-1/2">
                Přihlásit se
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SignIn;
