
import 'firebase/auth';
import 'firebase/database';
import fireConnection from '../../stores/firebaseStore';

function loginUser(email:string, password:string) {
	fireConnection.connections[0].auth().signInWithEmailAndPassword(email, password)
	.then(function (user:any) {
		console.log('Credenciales correctas, ¡bienvenido!');
	})
	.catch(function (error:any) {
		console.log(error);
	});
}

export default loginUser;