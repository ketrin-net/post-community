import { List, Spin } from 'antd';
import { useGetUsersQuery } from '../../store/api/usersApi';
import { UserCard } from '../../components/UserCard/UserCard';

export const UsersPage = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Spin spinning={isLoading} size="large">
      <List
        style={{ width: '100%' }}
        pagination={{
          position: 'bottom',
          align: 'center',
          pageSize: 10,
          showQuickJumper: false,
        }}
        dataSource={data}
        renderItem={(item, index) => <UserCard key={index} user={item} />}
      />
    </Spin>
  );
};
