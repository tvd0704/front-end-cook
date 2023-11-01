import { Button, Form, Input} from "antd";
import { useState } from "react";

import { Modal } from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'code'],
    ['clean'],
    ['image'],
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


const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export const Chefs = (props: any) => {
  
  const [form] = Form.useForm();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFinish = async (values: any) => {

    
    setLoading(true);
    form.resetFields();
    console.log(values.content)
  
    
  }
 

  return (
    <>
       <Button  onClick={handleShow}>
        Launch demo modal
      </Button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header> <h4>Create a post</h4> </Modal.Header>
        <Modal.Body>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            form={form}
            style={{ maxWidth: 'calc(100% - 40px)' }}
        
          >
            <Form.Item name={"title"} label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={"content"} label="Content" rules={[{ required: true }]}>
              <ReactQuill
              
                theme="snow"
                modules={modules}
                formats={formats}
              />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal.Body>
        </Modal>
    
    </>
  );
}