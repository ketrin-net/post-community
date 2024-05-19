import { Button, List } from 'antd';
import { useState } from 'react';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';
import MoreInfoAboutUser from './components/MoreInfoAboutUser/MoreInfoAboutUser';
import { userResponse } from '../../models/user.type';
import UserDrawer from '../UserDrawer/UserDrawer';

interface UserCardProperties {
  user: userResponse;
}

export const UserCard = (props: UserCardProperties) => {
  const { user } = props;
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isOpenUserInfo, setIsOpenUserInfo] = useState<boolean>(false);

  const handleOpenDrawer = (userId: number) => {
    setSelectedUserId(userId);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
    setSelectedUserId(null);
  };

  const handleOpenUserInfo = () => {
    setIsOpenUserInfo((prev) => !prev);
  };

  return (
    <>
      <List.Item
        style={{ alignItems: 'flex-start' }}
        actions={[
          <Button icon={<UserOutlined />} type="text" onClick={handleOpenUserInfo}>
            About User
          </Button>,
          <Button icon={<MessageOutlined />} type="link" onClick={() => handleOpenDrawer(user.id)}>
            Posts
          </Button>,
        ]}
      >
        <List.Item.Meta
          title={user.name}
          description={
            <>
              <p>username: @{user.username}</p>
              {isOpenUserInfo && <MoreInfoAboutUser user={user} />}
            </>
          }
        />
      </List.Item>
      {drawerVisible && selectedUserId && (
        <UserDrawer
          visible={drawerVisible}
          onClose={handleCloseDrawer}
          userId={selectedUserId}
          username={user.username}
        />
      )}
    </>
  );
};
