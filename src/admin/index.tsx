import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";

import { Header } from "../components/header/index";
import {RecipesAdmin} from "./recipes/index"


export const Admin: React.FC = () => {
  return (
    <>
      <Header />
      <Container className="mt-1 p-0">
        <Row>
          <Col>
            <Tabs defaultActiveKey="home" transition={false} className="mb-3">
              <Tab eventKey="recipes" title="Recipes">
              <RecipesAdmin/>
              </Tab>
              
              <Tab eventKey="recruitment" title="Recruitment"></Tab>
              <Tab eventKey="tour" title="Tour"></Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      )
    </>
  );
};
