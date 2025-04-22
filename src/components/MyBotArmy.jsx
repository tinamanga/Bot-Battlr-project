import React from "react";
import BotCard from "./BotCard";

function MyBotArmy({ bots, onRemove, onDischarge,onRelease }) {
  return (
    <div className="my-army">
      <h2>MyBot Army</h2>
      {
        bots.length === 0 ? (
          <p>No bots enlisted yet.</p>
        ) : ( 
          <div className="army-grid">
            {bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                onRelease={onRelease}
                onClick={() => onRemove(bot.id)}
               handleDischarge={onDischarge}
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
