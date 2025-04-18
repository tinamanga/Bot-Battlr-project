import React from "react";


function BotSpecs({ bot, onBack, onEnlist }) {
  return (
    <div className="bot-specs">
      <h2>Bot Details</h2>
      <img src={bot.avatar_url} alt={bot.name} className="specs-avatar" />
      <h3>{bot.name}</h3>
      <p className="catchphrase">"{bot.catchphrase}"</p>
      <div className="bot-info">
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
      </div>
      <div className="specs-buttons">
        <button onClick={onBack}>🔙 Back to List</button>
        <button onClick={() => onEnlist(bot)}>➕ Enlist Bot</button>
      </div>
    </div>
  );
}

export default BotSpecs;
