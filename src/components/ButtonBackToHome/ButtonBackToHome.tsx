import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Route } from '../../config/routing/Route';

export const ButtonBackToHome = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(Route.Home);
  };

  return (
    <Button icon={<ArrowLeftOutlined />} onClick={handleClickButton}>
      Вернуться на главную
    </Button>
  );
};
