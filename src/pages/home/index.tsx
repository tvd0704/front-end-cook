import { Header } from "../../components/header";
import Image1 from "../../image/1664309670688.jpeg";
import "./home.css";
import Card from "react-bootstrap/Card";
import Image2 from "../../image/1486076474733.jpeg";
import Image3 from "../../image/1657896865680.jpeg";
import Image4 from "../../image/1603217945142.jpeg";
import Image5 from "../../image/1576085803763.jpeg";
import Image6 from "../../image/1673622150649.jpeg";
import Image7 from "../../image/1610475134435.jpeg";
import Image8 from "../../image/1409776051162.jpeg";
import Image9 from "../../image/1591825028873.jpeg";
import Image10 from "../../image/1632949254630.jpeg";
import Image11 from "../../image/1585756035887.jpeg";
import Image12 from "../../image/1670516159706.jpeg";
import Image13 from "../../image/1665168279761.jpeg";
import Image14 from "../../image/1698174482878.jpeg";
import Image15 from "../../image/1698077322866.jpeg";
import Image16 from "../../image/1684179848249.jpeg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Footer } from "../../components/footer";

export const Home: React.FC = () =>  {
  

  return (
    <>
      <Header />
      <div className="container">
        <div className="header-home">
          <Image src={Image1} fluid className="image1-home" />
        </div>

        <div className="food1-home">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image3} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image4} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Image2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="food2-home">
          <h3>Creamy, Dreamy Risotto Recipes</h3>

          <div className="food2-card">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Image5} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Image6} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Image7} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={Image8} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={12} md={8}>
              <Image src={Image9} fluid />
            </Col>
            <Col xs="auto" className="food3-home-text">
              <div>SAVE TIME + EFFORT</div>
              <div>13 Soups You Should Be Making in Your Multicooker</div>
            </Col>
          </Row>
        </div>

        <div className="food4-home">
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src={Image10} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "40rem" }} className="food4-card">
            <Card.Img variant="top" src={Image10} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={12} md={8}>
              <Image src={Image11} fluid />
            </Col>
            <Col xs={6} md={4} className="food3-home-text">
              <div>SAVE TIME + EFFORT</div>
              <div>13 Soups You Should Be Making in Your Multicooker</div>
            </Col>
          </Row>
        </div>

        <div className="food4-home">
          <Card style={{ width: "40rem" }}>
            <Card.Img variant="top" src={Image12} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "40rem" }} className="food4-card">
            <Card.Img variant="top" src={Image13} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="what_new">
          <h2>What's New</h2>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={8} md={6} className="food3-home-text">
              <div>EARLIER TODAY</div>
              <h3>
                The Phrase ‘Taco Tuesday’ Can Now, Finally, Be Used in All 50
                States
              </h3>
            </Col>
            <Col xs="auto">
              <Image src={Image14} fluid />
            </Col>
          </Row>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={4} md={6} className="food3-home-text">
              <div>EARLIER TODAY</div>
              <h3>
                The Phrase ‘Taco Tuesday’ Can Now, Finally, Be Used in All 50
                States
              </h3>
            </Col>
            <Col xs="auto">
              <Image src={Image14} fluid />
            </Col>
          </Row>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={4} md={6} className="food3-home-text">
              <div>EARLIER TODAY</div>
              <h3>
                The Phrase ‘Taco Tuesday’ Can Now, Finally, Be Used in All 50
                States
              </h3>
            </Col>
            <Col xs="auto">
              <Image src={Image15} fluid />
            </Col>
          </Row>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={4} md={6} className="food3-home-text">
              <div>EARLIER TODAY</div>
              <h3>
                The Phrase ‘Taco Tuesday’ Can Now, Finally, Be Used in All 50
                States
              </h3>
            </Col>
            <Col xs="auto">
              <Image src={Image15} fluid />
            </Col>
          </Row>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={4} md={6} className="food3-home-text">
              <div>EARLIER TODAY</div>
              <h3>
                The Phrase ‘Taco Tuesday’ Can Now, Finally, Be Used in All 50
                States
              </h3>
            </Col>
            <Col xs="auto">
              <Image src={Image16} fluid />
            </Col>
          </Row>
        </div>

        <div className="food3-home">
          <Row>
            <Col xs={4} md={6} className="food3-home-text">
              <div>EARLIER TODAY</div>
              <h3>
                The Phrase ‘Taco Tuesday’ Can Now, Finally, Be Used in All 50
                States
              </h3>
            </Col>
            <Col xs="auto">
              <Image src={Image16} fluid />
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </>
  );
}
