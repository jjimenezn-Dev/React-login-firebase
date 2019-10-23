import React, { useContext, useEffect } from 'react';
import firebaseStore from '../../stores/firebaseStore';
import { observer } from 'mobx-react-lite';
import historyStored from '../../stores/historyStore';


const updateQuizUser = observer((props: any) => {
    const HistoryContextStore = useContext(historyStored);
    const firebaseContextStore = useContext(firebaseStore);
    useEffect(() => {
        let userKey = props.history.location.state.username ? props.history.location.state.username : "";
        let Quiz = props.history.location.state.username ? props.history.location.state.quiz : "";
        if (Quiz == "NA") {
            HistoryContextStore.history.push({ pathname: "/home", state: { username: userKey } });
            HistoryContextStore.history.go();
        }
        else {
            firstAsync().then(() => {
                const db = firebaseContextStore.connections.firestore();
                secondAsync(userKey, db).then(function (cityRef: any) {
                    cityRef.forEach(function (doc: any) {
                        console.log(doc.id, " => ", doc.data());
                        let curses: string = doc.data().courses;
                        let json = JSON.parse(curses);
                        json[Quiz] = true;
                        curses = JSON.stringify(json);

                        db.collection('users').doc(doc.id).update({ courses: curses }).then(() => {
                            HistoryContextStore.history.push({ pathname: "/home", state: { username: userKey } });
                            HistoryContextStore.history.go();
                        });
                    });
                });
            })
        }
    }, []);

    async function firstAsync() {
        return firebaseContextStore.addConnection();;
    }

    async function secondAsync(userKey: any, db: any) {
        return db.collection("users").where("id", "==", userKey).get();
    }

    return (
        <div></div>
    );
})
export default updateQuizUser;