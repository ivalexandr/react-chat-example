import { useEffect, useState } from "react";
import { Header } from "../Header";
import { Dialog } from '../Dialog';
import { Sender } from "../Sender";
import { AppContext } from "../../context";
import { setTheme, getTheme } from "../../utils/theme";

export const App = () => {
  const [message, setMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme])

  return (
    <AppContext.Provider value={{theme, toggleTheme}}>
      <div className="container">
        <Header />
        <Dialog newMessage={message}/>
        <Sender onAddMessage={setMessage}/>
      </div>
    </AppContext.Provider>
  );
};