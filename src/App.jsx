import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy'; 

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch bots from JSON server
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(error => console.error('Failed to fetch bots:', error));
  }, []);

  // Enlist bot (only once per bot)
  const enlistBot = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release bot (remove from army)
  const releaseBot = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  // Discharge bot (delete from backend and army)
  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setArmy(army.filter(bot => bot.id !== id));
        setBots(bots.filter(bot => bot.id !== id));
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  return (
    <div>
      <h1>🤖 Bot Battlr</h1>
      <MyBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection
        bots={bots}
        enlistBot={enlistBot}
      />
    </div>
  );
}

export default App;
