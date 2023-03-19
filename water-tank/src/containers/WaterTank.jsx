import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Input } from "../components/Input";
import { Tank } from "../components/Tank";
import { History } from "../components/History";

/**
 * @returns Vista principal para cargar el componente de tanque de agua con todas la tabla e imputs
 */
export const WaterTank = () => {
  let [showHistory, setShowHistory] = useState(false);
  let [updateDatabase, setUpdateDatabase] = useState(0);
  let [totalCapacityTank, setTotalCapacityTank] = useState(1000);
  let [waterProcent, setwaterProcent] = useState("0");

  return (
    <div>
      <Row className="mt-3">
        <Col sm={6} className="p-2">
          <Tank
            totalCapacityTank={totalCapacityTank}
            waterProcent={waterProcent}
          />
        </Col>
        <Col className="p-2">
          <Input
            updateDatabase={updateDatabase}
            waterProcent={waterProcent}
            showHistory={showHistory}
            setTotalCapacityTank={setTotalCapacityTank}
            setwaterProcent={setwaterProcent}
            setShowHistory={setShowHistory}
            setUpdateDatabase={setUpdateDatabase}
          />
        </Col>
      </Row>
      <div>
        {showHistory === true ? (
          <History
            updateDatabase={updateDatabase}
            setUpdateDatabase={setUpdateDatabase}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
