import { useState } from "react";
import FormUserTab from "../FormUserTab/FormUserTab";
import LoggedUserTab from "../LoggedUserTab/LoggedUserTab";
import PopUp from "../PopUp/PopUp";
import DeleteAccountTab from "../DeleteAccountTab/DeleteAccountTab";

const UserTab = ({ userTabFn }) => {
  const [loggedUser, setLoggedUser] = useState(true);
  const [isDeleteAccountTabOpened, setIsDeleteAccountTabOpened] =
    useState(false);

  const handleLogOut = () => {
    setLoggedUser(false);
  };

  const handleDeleteAccountModal = () => {
    setIsDeleteAccountTabOpened((current) => !current);
  };

  return (
    <div className="w-1/4 h-full fixed right-0 top-0 bg-gray-800 border-l border-gray-700 flex flex-col justify-evenly items-center">
      <button className="absolute top-3 right-4" onClick={userTabFn}>
        X
      </button>
      {loggedUser ? (
        <LoggedUserTab
          userLogOutFn={handleLogOut}
          openDeleteAccountModalFn={handleDeleteAccountModal}
        />
      ) : (
        <FormUserTab />
      )}
      {isDeleteAccountTabOpened && <PopUp modalFn={handleDeleteAccountModal}><DeleteAccountTab modalFn={handleDeleteAccountModal}/></PopUp>}
    </div>
  );
};

export default UserTab;
