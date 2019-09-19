import {observable, } from "mobx";
import * as firebase from 'firebase';
import config from "../components/utils/firebaseCredentials";

class firebaseStore {
	connections: any = [];

	get completedTodosCount() {
    	return this.connections.filter().length;
    }

	report() {
		if (this.connections.length === 0)
			return "Upsi";
		return `Next todo: "${this.connections[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.connections.length}`;
	}

    addTodo() {
		if(this.connections.length == 0){
			this.connections.push( firebase.initializeApp(config));
		}
	}
}

const fireConnection = new firebaseStore();

export default fireConnection;
