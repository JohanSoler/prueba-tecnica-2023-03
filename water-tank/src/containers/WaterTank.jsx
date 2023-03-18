import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Input } from "../components/Input";
import { Tank } from "../components/Tank";

export const WaterTank = () => {
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
            setTotalCapacityTank={setTotalCapacityTank}
            setwaterProcent={setwaterProcent}
          />
        </Col>
      </Row>
    </div>
  );
};
