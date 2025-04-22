import React from "react";

function BotCard({
  bot,
  onSelect,
  handleDischarge,
  showDischarge,
  toggleFavorite,
  toggleEnlist,
  upgradeBot,
  isEnlisted,
  isFavorited,
  canEnlist,
  onRelease
}) {
  const { name, avatar_url, catchphrase, bot_class, health, damage, armor } = bot;

  return (
    <div className="bot-card" onClick={() => onRelease(bot) } >
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p><strong>Class:</strong> {bot_class}</p>
      <p><em>{catchphrase}</em></p>
      <p>❤️ {health} | ⚔️ {damage} | 🛡️ {armor}</p>

      {/* Enlist button only if not already enlisted and allowed by class rule */}
      {!isEnlisted && canEnlist && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleEnlist(bot);
          }}
        >
          Enlist
        </button>
      )}

      {/* If already enlisted, we show the release button instead */}
      {isEnlisted && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRelease(bot); // Trigger release when clicked
          }}
          style={{ backgroundColor: "#ff3333", color: "#fff" }}
        >
          Release
        </button>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(bot);
        }}
      >
        {isFavorited ? "Favorited" : " Favorite"}
      </button>

      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            upgradeBot(bot.id, "health");
          }}
        >
          Upgrade Health
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            upgradeBot(bot.id, "damage");
          }}
        >
          Upgrade Damage
        </button>
      </div>

      {showDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDischarge(bot.id);
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
