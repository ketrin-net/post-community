import { Drawer, List } from 'antd';
import { useGetPostsByUserIdQuery } from '../../store/api/postsApi';
import { Link } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/query';

interface UserDrawerProps {
  visible: boolean;
  userId: number;
  username: string;
  onClose: () => void;
}

const UserDrawer = ({ visible, userId, username, onClose }: UserDrawerProps) => {
  const { data, isLoading } = useGetPostsByUserIdQuery(userId ?? skipToken);

  return (
    <Drawer
      title={`Posts by ${username}`}
      placement="right"
      onClose={onClose}
      open={visible}
      size="large"
      loading={isLoading}
    >
      {data && (
        <List
          dataSource={data}
          renderItem={(item, index) => (
            <Link to={`/message/${item.id}`}>
              <List.Item key={index}>
                <List.Item.Meta title={item.title} description={item.body} />
              </List.Item>
            </Link>
          )}
        />
      )}
    </Drawer>
  );
};

export default UserDrawer;
