import { useReducer, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ADD_MESSAGE, reducer, REMOVE_MESSAGE, UPDATE_STATUS } from './reducer';
import { Item } from './Item';
import { normalizeDialog } from './helpers';
import { dialog } from '../../data';
import { Title } from './Title';
import './style.css';

const Dialog = ({ newMessage }) => {
  const dialogRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    messages: dialog,
  });
  
  useEffect(() => {
    if (newMessage) {
      dispatch({
        type: ADD_MESSAGE,
        payload: newMessage,
      });
    }

    setTimeout(() => {
      dispatch({
        type: UPDATE_STATUS,
        payload: {
          id: newMessage?.id,
          status: 'readed',
        }
      });
    }, 1000);
  }, [newMessage]);

  useEffect(() => {
    dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
  }, [state.messages.length]);

  const onRemoveHandler = (id) => {
    dispatch({
      type: REMOVE_MESSAGE,
      payload: id,
    });
  };

  const normalizedDialog = normalizeDialog(state.messages);

  return (
    <div className="dialog">
      <div className="overflow" ref={dialogRef}>
        {
          normalizedDialog.map(item => (
            item.type === 'message' 
            ? (
              <Item 
              {...item}
              key={item.id}
              onRemove={onRemoveHandler}
            />
            )
            : (<Title key={item.id} date={item.date}/>)
          ))
        }
      </div>
    </div>
  )
};

Dialog.propTypes = {
  newMessage: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export { Dialog };