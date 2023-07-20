import { ReactElement, useState } from 'react';

export default function PlayerCard({ className }: { className: string }): ReactElement {
  const [life, setLife] = useState(40);
  return (
    <div className={className + ' flex justify-center items-center flex-col'}>
      <button
        onClick={() => {
          setLife((currentLife) => currentLife + 1);
        }}
        className={'text-6xl text-center text-white'}
      >
        +
      </button>
      <h1 className="text-8xl m-8 text-center text-white">{life}</h1>
      <button
        onClick={() => {
          setLife((currentLife) => currentLife - 1);
        }}
        className={'text-6xl text-center text-white'}
      >
        -
      </button>
    </div>
  );
}
