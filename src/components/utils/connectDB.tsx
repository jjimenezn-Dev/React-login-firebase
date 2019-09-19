
import 'firebase/auth';
import 'firebase/database';
import fireConnection from '../../stores/firebaseStore';

function connectDB() {
	fireConnection.addTodo();
	console.log(fireConnection.connections);	 
}

export default connectDB;