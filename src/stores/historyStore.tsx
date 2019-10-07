import {observable, } from "mobx";
import { createBrowserHistory } from "history";
import { createContext } from "react";

class historyStore {
	@observable	history:any;
	constructor(){
		this.history = createBrowserHistory()
	}
}

const historyStored = createContext(new historyStore());

export default historyStored;
