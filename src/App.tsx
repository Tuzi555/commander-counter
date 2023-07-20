import PlayerCard from './player-card/PlayerCard.tsx';

function App() {
  return (
    <>
      <PlayerCard className={'bg-red-500 rotate-180'} />
      <PlayerCard className={'bg-green-500 rotate-180'} />
      <PlayerCard className={'bg-blue-500'} />
      <PlayerCard className={'bg-yellow-500'} />
    </>
  );
}

export default App;
