import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Route } from '../../config/routing/Route';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate(Route.Home);
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={handleClickButton}>
          Вернуться на стартовую страницу
        </Button>
      }
    />
  );
};

export default NotFoundPage;
