import { FC } from 'react';

interface ILogoProps {
  onClick?: () => void;
}
const Logo: FC<ILogoProps> = ({ onClick }): JSX.Element => (
  <h1 className="select-none cursor-pointer text-4xl text-[#db2828] font-black uppercase" onClick={() => onClick && onClick()}>
    Chilluju
  </h1>
);

export default Logo;
