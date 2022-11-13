import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const UsersLayout = ({ children }: Props) => {
  return (
    <div>
      <h2 className="text-2xl py-2 border-black border-2">
        Users layout top side
      </h2>
      <div className="py-2">{children}</div>
      <div className=" text-2xl py-2 border-black border-2">
        Users layout bottom side
      </div>
    </div>
  );
};

export default UsersLayout;
