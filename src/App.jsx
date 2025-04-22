import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import MyBotArmy from "./components/MyBotArmy";
import BotSpecs from "./components/BotSpecs";
import SortBar from "./components/SortBar";
import FilterBar from "./components/FilterBar";
import Favorites from "./components/Favorites";
import SearchBar from "./components/SearchBar";
import "./index.css";

function App() {
  const [bots, setBots] = useState([]);
  const [myArmy, setMyArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState("");
  const [filters, setFilters] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [credits, setCredits] = useState(500);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error("Failed to fetch bots:", err));
  }, []);

  const filteredBots = bots
    .filter((bot) => filters.length === 0 || filters.includes(bot.bot_class))
    .filter((bot) => bot.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (sortBy === "health") return b.health - a.health;
    if (sortBy === "damage") return b.damage - a.damage;
    if (sortBy === "armor") return b.armor - a.armor;
    return 0;
  });

  const toggleEnlist = (bot) => {
    const alreadyEnlisted = myArmy.some(
      (b) => b.id === bot.id || b.bot_class === bot.bot_class
    );
    if (alreadyEnlisted) {
      alert(`You already have a ${bot.bot_class} bot in your army.`);
      return;
    }
    setMyArmy((prev) => [...prev, bot]);
    setBots((prev) => prev.filter((b) => b.id !== bot.id));
    setSelectedBot(null);
  };

  const handleRemoveFromArmy = (id) => {
    setMyArmy((prev) => prev.filter((bot) => bot.id !== id));
  };

  const handleReleaseBot = (bot) => {
    setMyArmy((prev) => prev.filter((b) => b.id !== bot.id));
    setBots((prev) => [...prev, bot]);
  };

  const handleDischarge = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setBots((prev) => prev.filter((bot) => bot.id !== botId));
          setMyArmy((prev) => prev.filter((bot) => bot.id !== botId));
        }
      })
      .catch((err) => console.error("Failed to discharge bot:", err));
  };

  const toggleFavorite = (bot) => {
    setFavorites((prev) =>
      prev.find((b) => b.id === bot.id)
        ? prev.filter((b) => b.id !== bot.id)
        : [...prev, bot]
    );
  };

  const upgradeBot = (botId, stat) => {
    const cost = 50;
    if (credits < cost) {
      alert("Not enough credits!");
      return;
    }
    const updated = bots.map((bot) =>
      bot.id === botId ? { ...bot, [stat]: bot[stat] + 10 } : bot
    );
    setBots(updated);
    setCredits((prev) => prev - cost);
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <MyBotArmy
        bots={myArmy}
        onDischarge={handleDischarge}
        onRemove={handleRemoveFromArmy}
        onRelease={handleReleaseBot}
      />

      <Favorites bots={favorites} toggleFavorite={toggleFavorite} />
      <SortBar setSortBy={setSortBy} />
      <FilterBar selectedFilters={filters} setSelectedFilters={setFilters} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onEnlist={toggleEnlist}
          isEnlisted={myArmy.some((b) => b.id === selectedBot.id)}
        />
      ) : (
        <BotCollection
          bots={sortedBots}
          onSelect={setSelectedBot}
          toggleEnlist={toggleEnlist}
          toggleFavorite={toggleFavorite}
          upgradeBot={upgradeBot}
          myArmy={myArmy}
          favorites={favorites}
        />
      )}
    </div>
  );
}

export default App;
