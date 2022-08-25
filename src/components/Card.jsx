import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";

function CardInfo() {
  return (
    <div className="justify-content-around">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Bienvenido al Dashboard de Numpy</Card.Title>
          <Card.Text>
            Aquí encontrarás estadísticas de los usuarios y productos
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardInfo;
