import { observable, computed, action } from "mobx";
import * as firebase from 'firebase';
import { config } from "../components/utils/firebaseCredentials";
import { createContext } from "react";

class fireConnection {
	@observable connections:any;
	@observable fireAuth:any = [];

	@action addConnection() {
		if(!this.connections)
			this.connections = firebase.initializeApp(config);
		return firebase.app;
	}

	@action addAuth() {
		this.fireAuth.push(this.connections.auth());
		return this.fireAuth;
	}
}

const firebaseStore = createContext(new fireConnection());

export default firebaseStore;
