import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardInfo() {
  return (
    <div className="justify-content-around d-flex">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Bienvenido al Dashboard de Numpy</Card.Title>
          <Card.Text>
            Aquí encontrarás estadísticas de los usuarios y productos
          </Card.Text>
          <Card.Text>
            Podés visitar el sitio web desde este link:
          </Card.Text>
          <Button variant="success" href="http://localhost:3000/" target="_blank">Ir a Numpy!</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardInfo;
