import React, { useEffect } from 'react';
import Scroll, { Link } from 'react-scroll';
import 'react-table/react-table.css'
import matchSorter from 'match-sorter';
import { Column } from "react-table";
import ReactTooltip from 'react-tooltip';
import { Button } from "semantic-ui-react";
import TableComponent from '../utils/tableComponent';

const Home = (props: any, { match }: any) => {
  var Element: any = Scroll.Element;
  var columnsAccessor: Array<string> = [
    "Nombre",
    "apellido",
    "Correo",
  ]
  var columns: Array<Column<any>> = [
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
          Header: "Admin",
          accessor: "isAdmin",
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
          Cell: props => <span className="number">{props.value}</span>
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
            <Button onClick={() => { }} className="circular ui icon button">
              <i className="icon settings" />
            </Button>
            <ReactTooltip id="react-toooltip-update-person" type="info" place="right">
              {"Activar Usuario"}
            </ReactTooltip>
            <Button onClick={() => { }} className="circular ui icon button">
              <i className="icon trash" />
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

  useEffect(() => {
    console.log(props);
  }, []);

  function filter(filter: any, rows: any) {
    const result = matchSorter(rows, filter.value, {
      keys: ["name", "last_name", "document_id", "document_type"],
      threshold: matchSorter.rankings.WORD_STARTS_WITH
    });
    return result;
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
          data={props.history.location.state.data}
          loading={props.loading}
          columnsAccessor={columnsAccessor}
          searchPlaceHolder="Search person..."
          button={() => { }}>
        </TableComponent>
      </Element>
    </div>
  );
}

export default Home;
