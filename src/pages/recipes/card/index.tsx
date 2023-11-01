import { useState } from "react";
import { Header } from "../../../components/header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import http from "../../../http-common";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'


const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold']
  ],
};

const moduleIngredien = {
  toolbar: [

    [
      { list: 'ordered' }
    ],
   
  ],
};


const formats = [
  'background',
  'bold',
  'color',
  'font',
  'code',
  'italic',
  'link',
  'size',
  'strike',
  'script',
  'underline',
  'blockquote',
  'header',
  'indent',
  'list',
  'align',
  'direction',
  'code-block',
  'formula',
  'image',
   'video'
];




export const CardRecipe = (props: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const history = useNavigate();
  const [openingText, setOpeningText] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [ingredient, setIngredient] = useState('');

  
  const setDataTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const setDataContent = (e: any) => {
    setContent(e.target.value);
  };

  const setimgfile = (e: any) => {
    setFile(e.target.files[0]);
  };




  const addRecipeData = async (e: any) => {
    e.preventDefault();

    var formData = new FormData();
    formData.append("photo", file);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("openingText",openingText)
    formData.append("bodyText",bodyText)
    formData.append("ingredient",ingredient)

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const res = await http.post("/recipe/", formData, config);
    if(res.data.data){
      history("/recipes")
  }else{
      console.log("error")
  }
  };

  return (
    <>
      <Header></Header>
      <div className="container mt-3">
        <h1>Create Card Recipe</h1>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" onChange={setDataTitle} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control
              type="text"
              name="content"
              onChange={setDataContent}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Opening Text</Form.Label>
            <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={openingText}
            onChange={setOpeningText}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Body Text</Form.Label>
            <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={bodyText}
            onChange={setBodyText}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ingredients</Form.Label>
            <ReactQuill
            theme="snow"
            modules={moduleIngredien}
            formats={formats}
            value={ingredient}
            onChange={setIngredient}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Your Image</Form.Label>
            <Form.Control type="file" name="photo" onChange={setimgfile} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addRecipeData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};
