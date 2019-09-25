
import 'firebase/auth';
import 'firebase/database';
import fireConnection from '../../stores/firebaseStore';
import historyStored from '../../stores/historyStore';

function loginUser(email:string, password:string) {
	if (fireConnection.connections[0] && fireConnection.connections[0].auth){
		fireConnection.connections[0].auth().signInWithEmailAndPassword(email, password)
		.then(function (user:any) {
			console.log('Credenciales correctas, ¡bienvenido!');
			historyStored.history[0].push("/home");
			historyStored.history[0].go(0);
		})
		.catch(function (error:any) {
			console.log(error.message);
		});
	}
	else{
		console.log("Already connected");
		
	}
}

export default loginUser;