import { useParams } from 'react-router-dom';
import TitleForPostPage from './components/TitleForPostPage';
import { Card, Spin, Typography } from 'antd';
import ListComments from './components/ListComments';
import { ButtonBackToHome } from '../../components/ButtonBackToHome/ButtonBackToHome';
import { useGetPostByIdQuery } from '../../store/api/postsApi';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetCommentsByPostIdQuery } from '../../store/api/commentsApi';

const PostPage = () => {
  const { postId } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(Number(postId) ?? skipToken);
  const { data: comments } = useGetCommentsByPostIdQuery(Number(postId) ?? skipToken);

  return (
    <>
      <ButtonBackToHome />
      <Spin spinning={isLoading}>
        <Typography.Title level={3}>Posts:</Typography.Title>
        {post && (
          <Card title={<TitleForPostPage title={post.title} postId={post.id} />}>
            <Typography.Paragraph>{post.body}</Typography.Paragraph>
          </Card>
        )}
        <Typography.Title level={3}>Comments:</Typography.Title>
        {comments && <ListComments comments={comments} />}
      </Spin>
    </>
  );
};

export default PostPage;
