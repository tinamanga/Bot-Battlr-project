const [credits, setCredits] = useState(500); 

const upgradeBot = (botId, stat) => {
  const cost = 50;
  if (credits < cost) {
    alert("Not enough credits!");
    return;
  }

  const updatedBots = bots.map(bot => {
    if (bot.id === botId) {
      return {
        ...bot,
        [stat]: bot[stat] + 10,
      };
    }
    return bot;
  });

  setBots(updatedBots);
  setCredits(prev => prev - cost);
};

export default upgradeBot;
