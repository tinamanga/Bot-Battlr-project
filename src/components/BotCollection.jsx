import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onSelect, toggleEnlist,toggleFavorite, upgradeBot, myArmy, favorites }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => {
          const isEnlisted = myArmy.some((b) => b.id === bot.id);
          const isFavorited = favorites.some((f) => f.id === bot.id);
          const hasSameClass = myArmy.some((b) => b.bot_class === bot.bot_class);
           const canEnlist = !hasSameClass;

          return (
            <BotCard
              key={bot.id}
              bot={bot}
              onSelect={onSelect}
              toggleEnlist={toggleEnlist}
              toggleFavorite={toggleFavorite}
              upgradeBot={upgradeBot}
              isEnlisted={isEnlisted}
              isFavorited={isFavorited}
              canEnlist={canEnlist}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BotCollection;
