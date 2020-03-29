import React, { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
 
// const datax = [{ id: 1, title: 'Conan the Barbarian', year: '1982' }];
const columns = [
  {
    name: "Provinsi",
    selector: "attributes.Provinsi",
    sortable: true,
  },
  {
    name: 'Positif',
    selector: 'attributes.Kasus_Posi',
    sortable: true,
    right: true,
  },
  {
    name: 'Sembuh',
    selector: 'attributes.Kasus_Semb',
    sortable: true,
    right: true,
  },
  {
    name: 'Meninggal',
    selector: 'attributes.Kasus_Meni',
    sortable: true,
    right: true,
  },
];

const ListData = (props) => {
const [data, setData] = useState([]);

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://api.kawalcorona.com/indonesia/provinsi/";

useEffect(() => {
        fetch(proxyurl + url)
        .then(response => response.json())
        .then(jsonResponse => {
            setData(jsonResponse);
            console.log(jsonResponse);
        })  
}, []);

    return (
        <div className="table-margin cardTable">

            <DataTable
            title="Detail Penyebaran"
            columns={columns}
            data={data}
            fixedHeader={true}
            highlightOnHover={true}
            
        />
        </div>
    );
};

export default ListData;