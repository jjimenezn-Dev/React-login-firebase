import React, { useContext } from 'react';
import firebaseStore from '../../stores/firebaseStore';
import { observer } from 'mobx-react-lite';
import historyStored from '../../stores/historyStore';


const SignOutButton = observer(() => {
  const HistoryContextStore = useContext(historyStored);
  const firebaseContextStore = useContext(firebaseStore);

  function onCLickHandler (){
    let returned = firebaseContextStore.fireAuth.doSignOut;
    HistoryContextStore.history.push("/");
    HistoryContextStore.history.go();
  }

  return (
    <button className="logout_button" type="button" onClick={onCLickHandler}>
      Desconectarse
    </button>
  );
})
export default SignOutButton;