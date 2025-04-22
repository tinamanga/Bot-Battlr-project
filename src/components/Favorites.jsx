import React from "react";
import BotCard from "./BotCard";

function Favorites({ bots, toggleFavorite }) {
  return (
    <div className="favorite-bot-grid">
      <h2>Favorite Bots</h2>
      {bots.length === 0 ? (
        <p>No favorite bots yet.</p>
      ) : (
        bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            toggleFavorite={toggleFavorite}
            onSelect={() => {}}
            upgradeBot={() => {}}
            isEnlisted={false}
            isFavorited={true}
            canEnlist={false}
            onRelease={() => {}}
            showDischarge={false}
            handleDischarge={() => {}}
          />
        ))
      )}
    </div>
  );
}

export default Favorites;
