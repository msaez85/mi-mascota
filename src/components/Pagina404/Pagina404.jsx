import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const Pagina404 = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "white" }}>
        <div className="d-flex justify-content-center">
          <img src="https://i.postimg.cc/KcnYbqsg/404-ill.jpg" alt="" />
        </div>
        <div>
          <h1 style={{ color: "#4a4a4a" }}>Error 404. Not found</h1>
        </div>

        <h2
          style={{ color: "#4a4a4a" }}
          className="d-flex justify-content-center"
        >
          No es tu culpa, es nuestra. Proba refrescando la pagina
        </h2>
      </Container>
    </>
  );
};
export default Pagina404;