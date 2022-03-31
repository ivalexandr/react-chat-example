import { useState } from "react";
import { Header } from "../Header";
import { Dialog } from '../Dialog';
import { Sender } from "../Sender";

export const App = () => {
  const [message, setMessage] = useState(null);
  
  return (
    <div className="container">
        <Header />
        <Dialog newMessage={message}/>
        <Sender onAddMessage={setMessage}/>
    </div>
  );
};