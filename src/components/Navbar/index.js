import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import logotypeSrc from "../../assets/logotype.png";
import UserComponent from "../UserComponent";
import styles from "./styles.module.scss";
import Container from "../Container";

function Component({...props}) {
  return (
    <div className={styles.wrapper} {...props}>
      <Container>
        <Navbar expand="md" className={styles.navbar}>
        <Navbar.Brand href="#home">
          <img
            src={logotypeSrc}
            alt="Diamonds Match logotype"
            className={styles.logotype}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Главная</Nav.Link>
            <Nav.Link href="/link">Анкеты</Nav.Link>
            <Nav.Link href="/link">Заявки</Nav.Link>
            <Nav.Link href="/employers">Сотрудники</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown
              alignRight={true}
              id={"navbar-user-dropdown"}
              className={styles.dropdown}
              title={(<UserComponent name={"Настя Николаева"} />)}>
              <NavDropdown.Item href="#action/3.4">Выйти</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default Component;