import React, { useEffect, useContext } from 'react';
import Scroll, { Link } from 'react-scroll';
import 'react-table/react-table.css'
import matchSorter from 'match-sorter';
import { Column } from "react-table";
import ReactTooltip from 'react-tooltip';
import { Button } from "semantic-ui-react";
import TableComponent from '../utils/tableComponent';
import { observer } from 'mobx-react-lite';
import { IoMdConstruct, IoMdPersonAdd } from 'react-icons/io';
import historyStored from '../../stores/historyStore';
import firebaseStore from '../../stores/firebaseStore';
import { disconnect } from 'cluster';

const Home = observer((props: any, { match }: any) => {
  const HistoryContextStore = useContext(historyStored);
  const firebaseContextStore = useContext(firebaseStore);
  var Users: any = []
  var Element: any = Scroll.Element;
  var columnsAccessor: Array<string> = [
    "Nombre",
    "apellido",
    "Correo",
  ]
  var columns: Array<Column<any>> = [
    {
      Header: "Documento",
      columns: [
        {
          Header: "Cedula",
          accessor: "document_id",
          filterable: false,
          filterMethod: filter,
          filterAll: true,
          Cell: props => <span className="number">{props.value}</span>
        },
      ]
    },
    {
      Header: "Nombre Completo",
      columns: [
        {
          Header: "Nombre",
          accessor: "name",
          filterable: false,
          filterMethod: filter,
          filterAll: true
        },
        {
          Header: "Apellido",
          accessor: "last_name",
          filterMethod: filter,
          filterable: false,
          filterAll: true,

        },
      ]
    },
    {
      Header: "Usuario",
      columns: [
        {
          Header: "Correo",
          accessor: "mail",
          filterable: false,
          filterMethod: filter,
          filterAll: true,
          Cell: props => <span className="number">{props.value}</span>
        },
        {
          Header: "Activo",
          accessor: "available",
          filterable: false,
          filterMethod: filter,
          filterAll: true,
          Cell: props => <span className="number">{props.value === "true"? "si" : "no"}</span>
        },
        {
          Header: "Admin",
          accessor: "isAdmin",
          filterable: false,
          filterMethod: filter,
          filterAll: true,
          Cell: props => <span className="number">{props.value === "true"? "si" : "no"}</span>
        },
        {
          Header: "Curso completado",
          accessor: "courses",
          filterable: false,
          filterMethod: filter,
          filterAll: true,
          Cell: props => <span className="number">{validatedCourses(props.value) === true? "si" : "no"}</span>
        },
      ]
    },
    {
      Header: "Actions",
      filterable: false,
      sortable: false,
      filterMethod: filter,
      filterAll: true,
      Cell: row => {
        const person: any = row.original;
        return (
          <div >
            <Button key={person.id} onClick={(props: any) => { activePerson(row.original.id); }} className="circular ui icon button">
              <h3> <IoMdPersonAdd /> </h3>
            </Button>
            <ReactTooltip id="react-toooltip-update-person" type="info" place="right">
              {"Activar Usuario"}
            </ReactTooltip>
            <Button onClick={(props: any) => { activeAdmin(row.original.id) }} className="circular ui icon button">
              <h3> <IoMdConstruct /> </h3>
            </Button>
            <ReactTooltip id="react-toooltip-delete-person" type="info" place="right">
              {"Volver usuario administrador"}
            </ReactTooltip>
          </div >
        )
      }
      ,
    },
  ];

  function activePerson(userId: any) {
    firstAsync().then(() => {
      const db = firebaseContextStore.connections.firestore();
      secondAsync(userId, db).then(function (userRef: any) {
        userRef.forEach(function (doc: any) {
          console.log(doc.data());
          if (doc.data().available == "true") {
            db.collection('users').doc(doc.id).update({ available: "false" }).then(() => {
              reCharge();
            });
          }
          else if (doc.data().available == "false") {
            db.collection('users').doc(doc.id).update({ available: "true" }).then(() => {
              reCharge();
            });
          }
        });
      });
    })
  }


  function validatedCourses(courses:any){
    let course:any = new Object(JSON.parse(courses));
    console.log(course);
    
    let allComplete = true;
    for (const iterator in course) {
      
      if(!course[iterator]){
        allComplete = false;
      } 
    }
    return allComplete;
  }
  
  async function firstAsync() {
    return firebaseContextStore.addConnection();;
  }

  async function secondAsync(userKey: any, db: any) {
    return db.collection("users").where("id", "==", userKey).get();
  }

  function activeAdmin(userId: any) {
    firstAsync().then(() => {
      const db = firebaseContextStore.connections.firestore();
      secondAsync(userId, db).then(function (userRef: any) {
        userRef.forEach(function (doc: any) {
          console.log(doc.data());
          if (doc.data().isAdmin == "true") {
            db.collection('users').doc(doc.id).update({ isAdmin: "false" }).then(() => {
              reCharge();
            });
          }
          else if (doc.data().isAdmin == "false") {
            db.collection('users').doc(doc.id).update({ isAdmin: "true" }).then(() => {
              reCharge();
            });
          }
        });
      });
    })
  }



  function reCharge() {
    let userKey = props.history.location.state.username ? props.history.location.state.username : "";
    let authName = props.history.location.state.authName ? props.history.location.state.authName : "";
    firstDataAsync().then(() => {
      const db = firebaseContextStore.connections.firestore();
      secondDataAsync(userKey, db).then(function (userRef: any) {
        userRef.forEach(function (doc: any) {
          let user = doc.data();
          Users.push(user)
        });
      }).then(() => {
        HistoryContextStore.history.push({ pathname: "/usuarios", state: { authName: authName, username: userKey, data: Users } });
        HistoryContextStore.history.go();
      });
    })
  }

  async function firstDataAsync() {
    return firebaseContextStore.addConnection();;
  }

  async function secondDataAsync(userKey: any, db: any) {
    return db.collection("users").get();
  }

  function filter(filter: any, rows: any) {
    const result = matchSorter(rows, filter.value, {
      keys: ["name", "last_name", "document_id", "document_type"],
      threshold: matchSorter.rankings.WORD_STARTS_WITH
    });
    return result;
  }
  function disconnect(){
    HistoryContextStore.history.push("/");
    HistoryContextStore.history.go();
  }
  return (
    <div className="users_container">
      <h1>Administración de Usuarios</h1>
      <Element className="element" id="containerElement" style={{
        position: 'relative',
        height: '95vh',
        overflow: 'scroll',
      }}>
        <TableComponent
          columns={columns}
          data={props.history.location.state.data?props.history.location.state.data:disconnect()}
          loading={props.loading}
          columnsAccessor={columnsAccessor}
          searchPlaceHolder="Search person..."
          button={() => { }}>
        </TableComponent>
      </Element>
    </div>
  );
})

export default Home;
