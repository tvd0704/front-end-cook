import React from "react";
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Popconfirm, Space, Table, Tag} from 'antd';
import { Modal } from 'react-bootstrap';

import { ColumnsType } from "antd/es/table";

interface DataType {
  id: string;
  key: string;
  title: string;
  content: string;
  tag: string;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const RecipesAdmin: React.FC = () => {
 

  const columns: ColumnsType<DataType> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
     
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tag }) => {
        const tags = tag?.split(",");
        if (!tag) return null;
        const colors = ["#f50", "#2db7f5", "#87d068", "#108ee9", "magenta", "volcano", "orange", "lime"];

        return (
          <Space size={[0, 8]} wrap>
            {tags.map((e, idx) => (<Tag key={idx} color={colors[random(idx, colors.length)]}>#{e}</Tag>))}
          </Space>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="text">Edit</Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
     
      <Button type="primary">Create</Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Recipes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            {...layout}
            name="nest-messages"
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
          >
            <Form.Item name={"title"} label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={"content"} label="Content" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={"tag"} label="tag">
              <Input placeholder="example: facebook,google,..." />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
              </Button>
            </Form.Item>
          </Form>
        </Modal.Body>
      </Modal>
      <Table columns={columns}/>
    </>
  );
} 