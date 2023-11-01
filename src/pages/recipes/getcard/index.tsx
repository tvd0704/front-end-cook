import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import recipeService from "../../../service/recipeService";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./getcard.css";
import { UUID } from "crypto";
import { Header } from "../../../components/header";
import { decodeToken } from "../../../helper";
export const GetCard: React.FC = () => {
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_URL_IMAGE;
  const [refresh, setRefresh] = useState(false);
  const decode: any = decodeToken(localStorage.getItem("accessToken") || "");

  const getDataRecipe = () => {
    recipeService
      .getRecipe()
      .then((response: any) => {
        setData(response.data.data);
        console.log(response.data.data)
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const deleteRecipe = (id: UUID) => {
    recipeService
      .deleteRecipe(id)
      .then(() => {
        setRefresh(true);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getDataRecipe();
  }, [refresh]);

  return (
    <>
      <Header></Header>
      <div className="container mt-2">
        <div className="text-end">
          {decode ? (
            <>
              {decode.role === "Admin" && (
                <NavLink to="/card" className="text-decoration-none text-light">
                  <Button variant="primary"> Add Recipe</Button>
                </NavLink>
              )}
            </>
          ) : (
            ""
          )}
        </div>
        <div className="food1-home">
          {data.length > 0
            ? data.map((el: any, idx) => {
                return (
                  <div key={idx}>
                    <Card style={{ width: "18rem" }} className="card">
                      <Link to={`/recipes/${el.recipeId}`} className="link">
                        <Card.Img variant="top" src={`${url}/${el.image}`} />
                        <Card.Body>
                          <Card.Title
                            dangerouslySetInnerHTML={{ __html: el.content }}
                          ></Card.Title>
                          <Card.Text>{el.content}</Card.Text>
                        </Card.Body>
                      </Link>
                      {decode ? (
            <>
              {decode.role === "Admin" && (
                <Row className="button-receipe">
                <Col>
                  <Link to="/card">
                    {" "}
                    <Button variant="danger">Update</Button>
                  </Link>
                </Col>
                <Col>
                  <Button
                    variant="danger"
                    onClick={() => deleteRecipe(el.recipeId)}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
              )}
            </>
          ) : (
            ""
          )}
                    </Card>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
