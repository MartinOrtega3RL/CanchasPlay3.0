import React, { useState } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const datosIniciales = [
  { id: 1, nombre: 'Carlos', estado: 'activo' },
  { id: 2, nombre: 'Ana', estado: 'inactivo' },
  //  ... agregar más datos ficticios
];

export default function Tabla() {

  const [filas, setFilas] = useState(datosIniciales);

  const columnas = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'estado', headerName: 'Estado', width: 150 },
    {
      field: '',
      headerName: 'Editar / Borrar',
      sortable: false,
      width: 160,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClickEditar = () => {
          const id = params.row.id;
          const nuevoEstado = params.row.estado === 'activo' ? 'inactivo' : 'activo';
          const nuevasFilas = filas.map(row => row.id === id ? {...row, estado: nuevoEstado} : row);
          setFilas(nuevasFilas);
        };

        const onClickBorrar = () => {
          const id = params.row.id;
          setFilas(filas.filter(row => row.id !== id));
        };

        return (
          <div>
            <IconButton aria-label="editar" onClick={onClickEditar}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="borrar" onClick={onClickBorrar}>
              <DeleteIcon />
            </IconButton>
          </div>
        );
      }
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filas}
        columns={columnas}
        pageSize={5}
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: GridToolbarContainer,
        }}
        componentsProps={{
          toolbar: {
            children: [
              <GridToolbarExport />
            ],
          },
        }}
      />
    </div>
  );
}