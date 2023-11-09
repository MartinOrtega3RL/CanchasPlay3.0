import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const localizedTextsMap = {
  columnMenuUnsort: "Desordenado",
  columnMenuSortAsc: "Ordenar por Ascedente",
  columnMenuSortDesc: "Ordenar por Descendete",
  columnMenuFilter: "Filtro",
  columnMenuHideColumn: "Ocultar",
  columnMenuShowColumns: "Mostrar columnas",
  filterOperatorContains: "Contiene",
  filterOperatorEquals: "Igual",
  filterOperatorStartsWith: "Empieza con",
  filterOperatorEndsWith: "Termina con",
  filterOperatorIsEmpty: "Vacio",
  filterOperatorIsNotEmpty: "No vacio ",
};

const AdminPage = () => {
  const [datosAdm, setDatosAdm] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getDatosProp")
      .then((response) => {
        setDatosAdm(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error " + error);
      });
  }, []);

  const columns = [
    {
      name: "id_Propietario",
      label: "ID",
      options: { filter: true, sort: true },
    },
    { name: "id_Cuenta", label: "ID_Cuenta" },
    { name: "nombre", label: "Nombre" },
    { name: "apellido", label: "Apellido" },
    { name: "num_telefono", label: "Telefono" },
    { name: "dni", label: "DNI" },
    { name: "email", label: "Correo" },
    { name: "certificado_comercio", label: "Certificado Cancha" },
    { name: "Verificado", label: "Estado" },
    {
      name: "edit",
      label: "Editar",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <EditIcon onClick={() => handleEdit(tableMeta.rowData)} />
        ),
      },
    },
    {
      name: "delete",
      label: "Eliminar",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (
          <DeleteIcon onClick={() => handleDelete(tableMeta.rowData)} />
        ),
      },
    },
  ];


  const options = {
    filterType:"checkbox",
    selectableRows:"none",
    customToolbarSelect: (selectedRows,displayData,setSelectedRows) =>{},
  };


  const handleEdit = (rowData) => {
    console.log("Funca el edit",rowData);

  }

  const handleDelete = (rowData) => {
    console.log("Funca el delete",rowData);
    
  }

  return (
    <MUIDataTable title={"Datos Con Axios"} data={datosAdm} columns={columns} options={options} />
  );
};

export default AdminPage;
