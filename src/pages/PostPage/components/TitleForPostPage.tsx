import { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Button, Flex, Input, Tooltip, Typography, Form, Alert } from 'antd';
import { useEditPostMutation } from '../../../store/api/postsApi';

interface TitleForPostPageProps {
  postId: number;
  title: string;
}

interface FormValues {
  title: string;
}

const TitleForPostPage = ({ title, postId }: TitleForPostPageProps) => {
  const [editPost, { isError }] = useEditPostMutation();
  const [isEditingTitle, setIsEditingTitle] = useState<boolean>(false);

  const handleSaveChange = async (values: FormValues) => {
    await editPost({ id: postId, ...values });
    setIsEditingTitle(false);
  };

  return (
    <>
      {isError && <Alert message="Изменения не сохранились... Попробуйте позже!" type="error" showIcon closable />}
      {!isEditingTitle ? (
        <Flex gap={8} align="flex-end">
          <Typography.Title level={2} style={{ margin: 0 }}>
            {title}
          </Typography.Title>
          <Tooltip title="changing the title">
            <Button type="link" icon={<EditOutlined />} onClick={() => setIsEditingTitle(true)} />
          </Tooltip>
        </Flex>
      ) : (
        <Form layout="inline" onFinish={handleSaveChange} initialValues={{ title }} style={{ alignItems: 'center' }}>
          <Form.Item name="title">
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default TitleForPostPage;
