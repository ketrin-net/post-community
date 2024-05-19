import { Drawer } from 'antd';

interface UserDrawerProps {
  visible: boolean;
  userId: number;
  username: string;
  onClose: () => void;
}

const UserDrawer = ({ visible, userId, username, onClose }: UserDrawerProps) => {
  return (
    <Drawer title={`Posts by ${username}`} placement="right" onClose={onClose} open={visible} size="large"></Drawer>
  );
};

export default UserDrawer;
