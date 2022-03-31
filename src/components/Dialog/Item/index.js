import PropTypes from 'prop-types';
import cn from 'classnames';
import dayjs from 'dayjs';
import { IoIosTrash } from 'react-icons/io';
import { Icon } from '../../Icon';

import './style.css';

const Item = ({ isReverse, isRemovable, messages, avatar, onRemove }) => {

  const onRemoveHandler = event => {
    const { id } = event.currentTarget.dataset;
    onRemove(Number(id));
  };

  return (
    <div
    className={cn('item', {reverse: isReverse, removable: isRemovable})}
    >
      <img src={avatar} alt="avatar" className="avatar" />
      <div className="list">
        {
          messages.map(item => (
            <div className="list-item" key={item.id}>
              <div className="text">{item.text}</div>
              <div className="time">{dayjs(item.date).format('HH:mm')}</div>
              <Icon 
                size={15}
                className="message-status"
                name={
                  item.status === 'sended' ? 'MessageSended' : 'MessageReaded'
                }
              />
              <IoIosTrash 
                data-id={item.id}
                size={15}
                className="remove-message"
                onClick={onRemoveHandler}
              />
            </div>
          ))
        }
      </div>
    </div>
  );;
};  

Item.propTypes = {
  isReverse: PropTypes.bool.isRequired,
  isRemovable: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(["sended", "readed"]),
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export { Item };