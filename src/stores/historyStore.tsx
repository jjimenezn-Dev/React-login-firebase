import {observable, } from "mobx";
import { createBrowserHistory } from "history";

class historyStore {
	history: any = [];

	@observable
	get completedTodosCount() {
    	return this.history.filter().length;
    }

	report() {
		if (this.history.length === 0)
			return "Upsi";
		return `Next todo: "${this.history[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.history.length}`;
	}

    addTodo() {
		if(this.history.length === 0){
			let historyValue = createBrowserHistory();
			this.history.push(historyValue);
		}
	}
}

const historyStored = new historyStore();

export default historyStored;
