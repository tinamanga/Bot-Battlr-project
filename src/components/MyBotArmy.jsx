import React from "react";


function MyBotArmy({ bots, onRemove }) {
  return (
    <div className="my-army">
      <h2>My Bot Army</h2>
      {
        bots.length === 0 ? (
          <p>No bots enlisted yet.</p>
        ) : (
          <div className="army-grid">
            {bots.map(bot => (
              <div
                key={bot.id}
                className="army-bot"
                onClick={() => onRemove(bot.id)}
                onDischarge={() => handleDischarge(bot.id)} //to delete from backend and army
                showDischarge={true}
                title="Click to release"
              >
                <img src={bot.avatar_url} alt={bot.name} />
                <div>
                  <h4>{bot.name}</h4>
                  <small>{bot.bot_class}</small>
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}

export default MyBotArmy;
