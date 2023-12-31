import { useState } from 'react';
import classes from './Player.module.css';

const Player = ({ name, symbol, move, onNameChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const buttonClickHandler = () => {
    setIsEditing((prevStat) => !prevStat);
    onNameChange(symbol, playerName);
  };

  const inputChangeHandler = (event) => {
    setPlayerName(event.target.value);
  };

  return (
    <li className={move === symbol ? 'active' : ''}>
      <span className={classes['player']}>
        {!isEditing && (
          <span className={classes['player-name']}>{playerName}</span>
        )}
        {isEditing && (
          <input
            type="text"
            required
            onChange={inputChangeHandler}
            value={playerName}
          />
        )}
        <span className={classes['player-symbol']}>{symbol}</span>
      </span>
      {!isEditing && <button onClick={buttonClickHandler}>Edit</button>}
      {isEditing && <button onClick={buttonClickHandler}>Save</button>}
    </li>
  );
};

export default Player;
