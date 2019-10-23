import React from 'react';
import Scroll, { Link } from 'react-scroll';
import 'react-table/react-table.css'
import matchSorter from 'match-sorter';
import { Column } from "react-table";
import ReactTooltip from 'react-tooltip';
import { Button } from "semantic-ui-react";
import TableComponent from '../utils/tableComponent';

const Home = (props:any, { match }: any) => {
  var Element: any = Scroll.Element;
  let columnsAccessor: Array<string> = [
    "Nombre",
    "apellido",
    "Correo",
  ]
  let columns: Array<Column<any>> = [
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
          accessor: "document_id",
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
        const person: any = row.original; return (
          <div >
            <Link to={`person/update/${person.id}`}>
              <Button
                className="circular ui icon button"
                primary
                data-tip=""
                data-for="react-toooltip-update-person"
              >
                <i className="icon settings" />
              </Button>
              <ReactTooltip id="react-toooltip-update-person" type="info" place="right">
                {"1"}
              </ReactTooltip>
            </Link>
            <Button
              onClick={() => {}}
              className="circular ui icon button"
              color="red"
              data-tip=""
              data-for="react-toooltip-delete-person"
            >
              <i className="icon trash" />
            </Button>
            <ReactTooltip id="react-toooltip-delete-person" type="error" place="right">
              {"2"}
            </ReactTooltip>
            <Link to={`person/inspect/${person.id}`}>
              <Button

                className="circular ui icon button"
                color="black"
                data-tip=""
                data-for="react-toooltip-inspect-person"
              >
                <i className="icon eye" />
              </Button>
              <ReactTooltip id="react-toooltip-inspect-person" type="dark" place="right">
                {"3"}
              </ReactTooltip>
            </Link>

            <Link to={`person/inspect/kinships/${person.id}`}>
              <Button
                className="circular ui icon button"
                color="teal"
                data-tip=""
                data-for="react-toooltip-inspect-person´s kainships"
              >
                <i className="icon users" />
              </Button>
              <ReactTooltip id="react-toooltip-inspect-person´s kainships" type="dark" place="right">
                {"4"}
              </ReactTooltip>
            </Link>

            <Link to={`Tree/TreeComponent/${person.id}`}>
              <Button

                className="circular ui icon button"
                color="green"
                data-tip=""
                data-for="react-toooltip-inspect-person"
              >
                <i className="icon tree"></i>
              </Button>
              <ReactTooltip id="react-toooltip-inspect-person" type="dark" place="right">
                {"5"}
              </ReactTooltip>
            </Link>
          </div >

        )
      }

      ,
    },
  ];

  function filter(filter: any, rows: any) {

    const result = matchSorter(rows, filter.value, {
      keys: ["name", "last_name", "document_id", "document_type"],
      threshold: matchSorter.rankings.WORD_STARTS_WITH
    });
    return result;
  }
  return (

    <div>
      <Element className="element" id="containerElement" style={{
        position: 'relative',
        height: '95vh',
        overflow: 'scroll',
      }}>
        <TableComponent
          columns={columns}
          data={props.data}
          loading={props.loading}
          columnsAccessor={columnsAccessor}
          searchPlaceHolder="Search person..."
          button={()=>{}}>
        </TableComponent>
      </Element>

    </div>
  );
}

export default Home;
