import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection';
import MyBotArmy from './components/MyBotArmy';
import FilterBar from './components/FilterBar';
import SortBar from './components/SortBar';
import BotSpecs from './components/BotSpecs';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState('health'); // Default sorting by health
  const [selectedBot, setSelectedBot] = useState(null); // To hold the selected bot for specs view

  // Fetch bots data from the server
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(error => console.error('Failed to fetch bots:', error));
  }, []);

  // Enlist a bot to the army (only if not already enlisted)
  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release a bot from the army
  const releaseBot = (id) => {
    setArmy(army.filter(bot => bot.id !== id));
  };

  // Discharge a bot (delete from both the army and backend)
  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== id));
        setArmy(army.filter(bot => bot.id !== id));
      })
      .catch(error => console.error('Error deleting bot:', error));
  };

  // Filter bots by class
  const filteredBots = bots.filter(bot => 
    filters.length === 0 || filters.includes(bot.bot_class)
  );

  // Sort bots based on selected sort order
  const sortedBots = filteredBots.sort((a, b) => b[sortOrder] - a[sortOrder]);

  // If bot is selected, show BotSpecs
  if (selectedBot) {
    return (
      <div className="app">
        <h1>Bot Battlr</h1>
        <BotSpecs 
          bot={selectedBot} 
          goBack={() => setSelectedBot(null)} 
          enlistBot={enlistBot} 
        />
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <FilterBar setFilters={setFilters} />
      <SortBar setSortOrder={setSortOrder} />
      <MyBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection 
        bots={sortedBots} 
        enlistBot={enlistBot} 
        onBotClick={setSelectedBot} 
      />
    </div>
  );
}

export default App;
