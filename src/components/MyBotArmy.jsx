import React from "react";
import BotCard from "./BotCard";

function MyBotArmy({ bots, onRemove, onDischarge }) {
  return (
    <div className="my-army">
      <h2>My Bot Army</h2>
      {
        bots.length === 0 ? (
          <p>No bots enlisted yet.</p>
        ) : ( 
          <div className="army-grid">
            {bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                onClick={() => onRemove(bot.id)}
                onDischarge={() => onDischarge(bot.id)}
                showDischarge={true}
                
              />
            ))}
          </div>
        )
      }
    </div>
  );
}

export default MyBotArmy;
