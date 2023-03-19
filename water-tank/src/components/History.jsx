import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";

/**
 * @param {updateDatabase} Parametro para saber si es necesario actualizar la base de datos por nuevo registro
 * @param {setUpdateDatabase} Parametro enviar evento de actualizacion de base de datos por eliminacion de registro
 * @returns Vista para el pintado de tabla de base de datos y opcion de eliminarla
 */
export const History = ({ updateDatabase, setUpdateDatabase }) => {
  let [dataHistory, setDataHistory] = useState([]);
  let [deleteDataBase, setDeleteDataBase] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:4000/waterTank/history")
      .then((respuesta) => {
        console.log(respuesta.data.data);
        setDataHistory(respuesta.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateDatabase]);

  useEffect(() => {
    console.log(deleteDataBase);
    if (deleteDataBase > 1) {
      axios
        .delete("http://localhost:4000/waterTank/history")
        .then((respuesta) => {
          setUpdateDatabase(updateDatabase + 1);
          console.log("Eliminada la base de datos");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [deleteDataBase]);

  return (
    <div>
      <hr />
      {dataHistory.length > 0 ? (
        <>
          <Button
            className="my-3"
            variant="primary"
            onClick={(e) => {
              setDeleteDataBase(deleteDataBase + 2);
            }}
          >
            Eliminar todo de la base de datos
          </Button>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Capacidad total</th>
                <th>Litros agregados</th>
                <th>Centimetros cubicos agregados</th>
                <th>Mililitros agregados</th>
                <th>Porcentaje contenido</th>
                <th>Fecha creacion</th>
              </tr>
            </thead>
            <tbody>
              {dataHistory.map((record, i) => {
                console.log(record);
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{record.totalCapacity}</td>
                    <td>{record.liters}</td>
                    <td>{record.cubicCentimeter}</td>
                    <td>{record.milliliter}</td>
                    <td>{record.porcent}</td>
                    <td>{record.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : (
        <p>Aun no hay registros en la base de datos</p>
      )}
    </div>
  );
};
