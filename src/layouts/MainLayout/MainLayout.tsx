import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const { Header, Footer, Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className={styles.layoutGeneral}>
      <Header className={styles.layoutHeader}>UserPostFeed</Header>
      <Content className={styles.layoutContent}>
        <div className={styles.layoutContentInner}>
          <Outlet />
        </div>
      </Content>
      <Footer className={styles.layoutFooter}>
        UserPostFeed ©{new Date().getFullYear()} Created by Korotkaya Katerina
      </Footer>
    </Layout>
  );
};

export default MainLayout;
