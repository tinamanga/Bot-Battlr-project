import React from 'react';

function MyBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="my-bot-army">
      <h2>My Bot Army</h2>
      <div className="bot-list">
        {army.length > 0 ? (
          army.map(bot => (
            <div key={bot.id} className="bot-card">
              <img src={bot.avatar_url} alt={bot.name} width="100" />
              <h3>{bot.name}</h3>
              <p>Class: {bot.bot_class}</p>
              <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
              <div>
                <button onClick={() => releaseBot(bot.id)}>Release</button>
                <button onClick={() => dischargeBot(bot.id)} style={{ color: 'red' }}>Discharge ❌</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your army is empty. Start enlisting bots!</p>
        )}
      </div>
    </div>
  );
}

export default MyBotArmy;
