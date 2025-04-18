import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {bots.length > 0 ? (
          bots.map(bot => (
            <BotCard key={bot.id} bot={bot} onClick={() => enlistBot(bot)} />
          ))
        ) : (
          <p>No bots available at the moment!</p>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
