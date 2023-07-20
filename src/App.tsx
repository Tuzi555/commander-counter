import PlayerCard from './player-card/PlayerCard.tsx';

function App() {
  return (
    <>
      <PlayerCard className={'bg-red-700/70 rotate-180'} />
      <PlayerCard className={'bg-emerald-700/70 rotate-180'} />
      <PlayerCard className={'bg-sky-700/70'} />
      <PlayerCard className={'bg-amber-700/70'} />
    </>
  );
}

export default App;
