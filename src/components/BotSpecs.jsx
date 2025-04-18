import React from 'react';

function BotSpecs({ bot, goBack, enlistBot }) {
  return (
    <div className="bot-specs">
      <h2>{bot.name} - Detailed Specs</h2>
      <img src={bot.avatar_url} alt={bot.name} width="200" />
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <p><strong>Catchphrase:</strong> "{bot.catchphrase}"</p>
      <button onClick={goBack}>Back to Collection</button>
      <button onClick={() => enlistBot(bot)}>Enlist to Army</button>
    </div>
  );
}

export default BotSpecs;
