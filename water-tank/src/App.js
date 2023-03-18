import "./App.css";
import Card from "react-bootstrap/Card";
import { WaterTank } from "./containers/WaterTank";

function App() {
  return (
    <div className="w-75 mx-auto mt-5">
      <Card>
        <Card.Body className="text-center">
          <Card.Header>
            <Card.Title>Tanque de agua</Card.Title>
            <Card.Subtitle className="text-muted pb-3">
              Prueba tecnica para: Grupo Novus Ltda
            </Card.Subtitle>
          </Card.Header>

          <WaterTank />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
