import React from 'react';


function BotCard({ bot, onClick, onDischarge, showDischarge }) {
  const { name, avatar_url, catchphrase, bot_class, health, damage, armor } = bot;

  return (
    <div className="bot-card" onClick={onClick}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p><strong>Class:</strong> {bot_class}</p>
      <p><em>{catchphrase}</em></p>
      <p>❤️ {health} | ⚔️ {damage} | 🛡️ {armor}</p>

      {showDischarge && (
        <button
          onClick={(e) => {
            // e.stopPropagation(); // prevent parent click event
            onDischarge();
          }}
        
          className="discharge-button"
          >
           <span className="red-x">❌</span> Discharge
        </button>
      )}
    </div>
  );
}

export default BotCard;
