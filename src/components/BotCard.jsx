import React from 'react';

function BotCard({ bot, onClick }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} width="100" />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
      <p><i>"{bot.catchphrase}"</i></p>
    </div>
  );
}

export default BotCard;
