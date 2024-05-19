import { List } from 'antd';
import { commentResponse } from '../../../models/comment.type';

interface ListCommentsProps {
  comments: commentResponse[];
}

const ListComments = ({ comments }: ListCommentsProps) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={comments}
      renderItem={(item, index) => (
        <List.Item key={index}>
          <List.Item.Meta title={item.name} description={item.email} />
          {item.body}
        </List.Item>
      )}
    />
  );
};

export default ListComments;
