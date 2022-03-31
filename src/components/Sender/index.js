import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Sender = ({ onAddMessage }) => {
  const [ value, setValue ] = useState('');

  const submitHandler = event => {
    event.preventDefault();
    onAddMessage({
      id: Date.now(),
      avatar:
        "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
      message: value,
      date: new Date().toISOString(),
      is: "my",
      status: "sended",
    });
    setValue('');
  };
  const changeHandler = event => setValue(event.target.value);

  return (
    <form onSubmit={submitHandler} className="sender">
      <input 
        type="text"
        placeholder="Введите сообщение"
        value={value}
        onChange={changeHandler}
        required
      />
      <button>Отправить</button>
    </form>
  );
};

Sender.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export { Sender };