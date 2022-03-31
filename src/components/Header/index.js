import { UserInfo } from "./UserInfo";
import { Theme } from "./Theme";
import './style.css';

export const Header = () => {
  return (
    <div className="header">
      <UserInfo />
      <Theme />
    </div>
  );
};

