import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

/**
 * @param {updateDatabase} Parametro para saber si es necesario actualizar la base de datos por nuevo registro
 * @param {setUpdateDatabase} Parametro enviar evento de actualizacion de base de datos por eliminacion de registro
 * @param {waterProcent} Parametro actualizar el porcentaje de agua
 * @param {showHistory} Parametro para mostrar u ocultar tabla
 * @param {setTotalCapacityTank} Parametro para actualizar total de capacidad del tanque
 * @param {setwaterProcent} Parametro para actualizar total procentual de agua del tanque
 * @param {setShowHistory} Parametro para enviar evento de mostrar u ocultar historial
 * @returns Vista para el pintado de imputs de base de datos, y opcion de enviado a DB
 */
export const Input = ({
  updateDatabase,
  waterProcent,
  showHistory,
  setTotalCapacityTank,
  setwaterProcent,
  setShowHistory,
  setUpdateDatabase,
}) => {
  const [sendDataBase, setSendDataBase] = useState(0);
  const [totalContainer, setTotalContainer] = useState(1000);
  const [liter, setLiter] = useState(0);
  const [cubicCentimeter, setCubicCentimeter] = useState(0);
  const [milliliter, setMilliliter] = useState(0);

  const percentageCalculate = (
    liter,
    milliliter,
    cubicCentimeter,
    totalContainer
  ) => {
    const cantidadCm3 =
      Number(liter) * 1000 +
      Number(milliliter) / 1000 +
      Number(cubicCentimeter);
    const porcentaje = (cantidadCm3 / totalContainer) * 100;
    console.log(
      cantidadCm3,
      liter,
      milliliter,
      cubicCentimeter,
      totalContainer
    );
    return porcentaje.toFixed(2);
  };

  useEffect(() => {
    axios
      .post("http://localhost:4000/waterTank/history", {
        totalCapacity: totalContainer,
        liters: liter,
        cubicCentimeter: cubicCentimeter,
        milliliter: milliliter,
        porcent: waterProcent,
      })
      .then((respuesta) => {
        setUpdateDatabase(updateDatabase + 1);
        console.log("Guardado en base de datos", respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sendDataBase]);

  const sendData = () => {
    setTotalCapacityTank(totalContainer);
    setwaterProcent(
      percentageCalculate(liter, milliliter, cubicCentimeter, totalContainer)
    );
    setSendDataBase(sendDataBase + 1);
  };

  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">
            Capacidad Total en cm3:
          </InputGroup.Text>
          <Form.Control
            type="number"
            value={totalContainer}
            onChange={(e) => {
              if (e.target.value < 0) {
                e.target.value = e.target.value * -1;
              }
              setTotalContainer(e.target.value);
            }}
          />
        </InputGroup>

        <br />
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">Agregar litros:</InputGroup.Text>
          <Form.Control
            pattern="^[1-9]\d*$"
            type="number"
            value={liter}
            onChange={(e) => {
              if (e.target.value < 0) {
                e.target.value = e.target.value * -1;
              }
              setLiter(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">Agregar cm3:</InputGroup.Text>
          <Form.Control
            type="number"
            value={cubicCentimeter}
            onChange={(e) => {
              if (e.target.value < 0) {
                e.target.value = e.target.value * -1;
              }
              setCubicCentimeter(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">
            Agregar milímetros cúbicos:
          </InputGroup.Text>
          <Form.Control
            type="number"
            value={milliliter}
            onChange={(e) => {
              if (e.target.value < 0) {
                e.target.value = e.target.value * -1;
              }
              setMilliliter(e.target.value);
            }}
          />
        </InputGroup>
      </Form>
      <Button className="mx-3" variant="primary" onClick={sendData}>
        Guardar
      </Button>
      <Button
        className="mx-3"
        variant="primary"
        onClick={(e) => {
          setShowHistory(!showHistory);
        }}
      >
        Ver historial
      </Button>
    </div>
  );
};
