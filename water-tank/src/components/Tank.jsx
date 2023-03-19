import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

/**
 * @param {totalCapacityTank} parametro para conocer capacidad total del tanque
 * @param {waterProcent} parametro para conocer agua contenida dentro del tanque
 * @returns vista con tanque de agua
 */
export const Tank = ({ totalCapacityTank, waterProcent }) => {
  return (
    <div>
      <div className="information">
        <p style={{ margin: "0px" }}>Procentaje actual {waterProcent}%</p>
        <div>
          {waterProcent > 100 ? (
            <p style={{ margin: "0px", color: "red" }}>
              Sobrepasa la capacidad actual
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Row>
        <Col sm={4} className="measures-container">
          <p className="textTop">{totalCapacityTank} cm3</p>
          <p className="textBottom">0 cm3</p>
        </Col>
        <Col className="water-tank-container">
          <div className="tank" style={{}}>
            <div className="water" style={{ height: `${waterProcent}%` }}></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
