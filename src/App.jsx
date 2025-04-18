import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import MyBotArmy from "./components/MyBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import FilterBar from "./components/FilterBar";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [filters, setFilters] = useState([]);

  // Fetch bots from the server
  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Failed to fetch bots:", err));
  }, []);

  // Filter and sort bots
  const filteredBots = bots.filter(
    (bot) => !myArmy.find((b) => b.id === bot.id)
  ).filter(
    (bot) => filters.length === 0 || filters.includes(bot.bot_class)
  );

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });

  // Enlist bot (one per class)
  const handleEnlist = (bot) => {
    const alreadyEnlisted = myArmy.some((b) => b.bot_class === bot.bot_class);
    if (alreadyEnlisted) {
      alert(`You already have a ${bot.bot_class} bot.`);
    } else {
      setMyArmy([...myArmy, bot]);
      setSelectedBot(null);
    }
  };

  function handleDischarge(botId) {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          // Remove from army state
          setArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
        }
      })
      .catch((err) => console.error("Failed to discharge bot:", err));
  }
  
//remove from army state
  const handleRemoveFromArmy = (id) => {
    setMyArmy(myArmy.filter((bot) => bot.id !== id));
  };
  

  return (
    <div className="App">
      <h1>Bot Battlr</h1>

      <MyBotArmy bots={myArmy} onRemove={handleRemoveFromArmy} />

      <SortBar setSortBy={setSortBy} />
      <FilterBar selectedFilters={filters} setSelectedFilters={setFilters} />

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={handleEnlist}
        />
      ) : (
        <BotCollection bots={sortedBots} onSelect={setSelectedBot} />
      )}
    </div>
  );
}

export default App;
