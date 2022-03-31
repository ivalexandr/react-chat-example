import { useContext } from 'react';
import { AppContext } from '../../../context';
import { IoIosMoon, IoIosSunny  } from 'react-icons/io';
import './style.css';

const Theme = () => {
  const { theme, toggleTheme } = useContext(AppContext);
  const onToggleThemeHandler = event => {
    const { theme } = event.currentTarget.dataset;
    toggleTheme(theme);
  };  
  return (
    <div 
      className="theme"
      data-theme={theme === 'light' ? 'dark' : 'light'}
      onClick={onToggleThemeHandler}
      > 
      {
        theme === 'light'
        ? <IoIosMoon size={20} className="dark" />
        : <IoIosSunny size={20} className="yellow" />
      }
    </div>
  );
};

export { Theme };