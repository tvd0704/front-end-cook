import { AiFillStar } from "react-icons/ai";
import "./recipes.css";
import Image from "react-bootstrap/esm/Image";
import { Header } from "../../components/header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Footer } from "../../components/footer";
import { useParams } from "react-router-dom";
import recipeService from "../../service/recipeService";
import { useEffect, useState } from "react";

const url = process.env.REACT_APP_URL_IMAGE;

export function Recipes() {

  const params = useParams()
  const [data, setData] = useState({} as any)
 
  
  const getRecipeById = () => {
    recipeService
      .getRecipeById(params.recipeId as any)
      .then((response: any) => {
        setData(response.data.data)
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRecipeById()
  }, [params]);


  return (
    <>
      <Header></Header>
      <div className="recipe-container">
        <h1 className="recipe-header">{data.title}</h1>

        <div className="recipe-evaluate">
          <div>
            <AiFillStar className="test" />
            <AiFillStar className="test" />
            <AiFillStar className="test" />
            <AiFillStar className="test" />
          </div>
          <div className="vl"></div>

          <div>7 preview</div>
          <div className="vl"></div>
          <div>2 photos</div>
        </div>

        <Row>
          <Col sm={8}>
            <div className="recipe-text1" dangerouslySetInnerHTML={{ __html: data.openingText }}></div>
          </Col>
        </Row>

        <Row>
          <Col sm={8} className="statistical">
            <div className="recipe-statistical">
              <div className="recipe-statistical-prep">
                <div className="text-statistical">Prep Time:</div>
                <div>20 mins</div>
              </div>
              <div className="recipe-statistical-rest">
                <div className="text-statistical">Rest Time:</div>
                <div>15 mins</div>
              </div>

              <div>
                <div className="text-statistical">Servings:</div>
                <div>12</div>
              </div>
            </div>

            <div className="recipe-statistical2">
              <div className="recipe-statistical-prep">
                <div className="text-statistical">Cook Time:</div>
                <div>1 hr 20 mins</div>
              </div>

              <div className="recipe-statistical-rest">
                <div className="text-statistical">Total Time:</div>
                <div>1 hr 55 mins</div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={8}>
            <div className="recipe-text1" dangerouslySetInnerHTML={{ __html: data.bodyText }}></div>
          </Col>
        </Row>

        <div>
          <span className="recipe-more">More recipes</span>: Try the latest and
          greatest recipes from <a href="/test">Chef John!</a>
        </div>

        <div>
          <h1>Ingredients</h1>
          <div dangerouslySetInnerHTML={{ __html: data.ingredient }}></div>
        </div>

        <div>
          <h1>Directions</h1>

          <h4>step1</h4>
          <Row>
            <Col sm={8}>
              <div>
                Add olive oil to a large pot and place over high heat. Add beef;
                cook and stir, breaking up with a spoon or spatula, about 2
                minutes. Add onions and salt, and cook, stirring, until beef is
                crumbly, and onions turn translucent, about 5 minutes.
              </div>
            </Col>
          </Row>

          <h4>Step2</h4>
          <Row>
            <Col sm={8}>
              <div>
                Add the chili powder, cumin, paprika, black pepper, cinnamon,
                cayenne, dried oregano, and garlic. Cook, stirring, for about 2
                minutes.
              </div>
            </Col>
          </Row>

          <h4>Step3</h4>
          <Row>
            <Col sm={8}>
              <div>
                Add peppers, sliced hot dogs, crushed tomatoes, and water. Stir
                together; bring the mixture to a simmer. Reduce heat to
                medium-low and simmer, stirring occasionally, until cooked to
                your taste, at least 30 minutes. Taste and adjust seasoning.
              </div>
            </Col>
          </Row>

          <h4>Step4</h4>
          <Row>
            <Col sm={8}>
              <div>
                Once chili is nearly ready, fill a large pot with lightly salted
                water and bring to a rolling boil. Stir in macaroni and return
                to a boil. Cook pasta uncovered, stirring occasionally, 1 minute
                less than specified in package directions, until not quite
                tender, and still firm to the bite, about 8 to 11 minutes.
              </div>
            </Col>
          </Row>
          <h4>Step5</h4>
          <Row>
            <Col sm={8}>
              <div>
                Bake in the preheated oven until bubbly, 30 to 35 minutes. Let
                rest 15 minutes before serving, topped with green onions.
              </div>
            </Col>
          </Row>

          <Image src={`${url}/${data.image}`} fluid className="image1-recipes"></Image>
          <div className="recipes-button">
            <Row>
              <Col>
                <button className="recipes-button-made">I made it</button>
                <button className="recipes-button-print">PRINT</button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
