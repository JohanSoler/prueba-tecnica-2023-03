import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export const Input = ({ setTotalCapacityTank, setwaterProcent }) => {
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
      Number(liter) * 1000 + Number(milliliter) + Number(cubicCentimeter);
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

  const sendData = () => {
    setTotalCapacityTank(totalContainer);
    setwaterProcent(
      percentageCalculate(liter, milliliter, cubicCentimeter, totalContainer)
    );
  };

  return (
    <div>
      <Form>
        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">
            Capacidad Total en cm3:
          </InputGroup.Text>
          <Form.Control
            type="text"
            value={totalContainer}
            onChange={(e) => {
              setTotalContainer(e.target.value);
            }}
            placeholder="Capacidad total"
          />
        </InputGroup>

        <br />
        <br />

        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">Agregar litros:</InputGroup.Text>
          <Form.Control
            type="text"
            value={liter}
            onChange={(e) => {
              setLiter(e.target.value);
            }}
            placeholder="Capacidad total"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">Agregar cm3:</InputGroup.Text>
          <Form.Control
            type="text"
            value={cubicCentimeter}
            onChange={(e) => {
              setCubicCentimeter(e.target.value);
            }}
            placeholder="Capacidad total"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text className="w-50">
            Agregar mililitros:
          </InputGroup.Text>
          <Form.Control
            type="text"
            value={milliliter}
            onChange={(e) => {
              setMilliliter(e.target.value);
            }}
            placeholder="Capacidad total"
          />
        </InputGroup>
      </Form>
      <Button variant="primary" onClick={sendData}>
        Guardar
      </Button>
    </div>
  );
};
