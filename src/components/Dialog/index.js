import { Item } from './Item';
import { normalizeDialog } from './helpers';
import { dialog } from '../../data';
import './style.css';

const Dialog = () => {
  const normalizedDialog = normalizeDialog(dialog);

  return (
    <div className="dialog">
      <div className="overflow">
        {
          normalizedDialog.map(item => (
            <Item 
              key={item.id}
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
};

export { Dialog };