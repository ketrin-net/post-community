import { Card, Descriptions, DescriptionsProps } from 'antd';
import styles from './MoreInfoAboutUser.module.css';
import { userResponse } from '../../../../models/user.type';

interface MoreInfoAboutUserProps {
  user: userResponse;
}

const MoreInfoAboutUser = (props: MoreInfoAboutUserProps) => {
  const { user } = props;
  const itemsContacts: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Phone',
      children: user.phone,
    },
    {
      key: '2',
      label: 'Email',
      children: user.email,
    },
    {
      key: '3',
      label: 'Website',
      children: user.website,
    },
  ];

  const itemsAddress: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'City',
      children: user.address.city,
    },
    {
      key: '4',
      label: 'Zipcode',
      children: user.address.zipcode,
    },
    {
      key: '2',
      label: 'Street',
      children: user.address.street,
    },
    {
      key: '3',
      label: 'Suite',
      children: user.address.suite,
    },
    {
      key: '4',
      label: 'Geo',
      children: (
        <>
          {user.address.geo.lat}
          <br />
          {user.address.geo.lng}
          <br />
        </>
      ),
    },
  ];

  const itemsCompany: DescriptionsProps['items'] = [
    {
      key: '1',
      label: 'Name',
      children: user.company.name,
    },
    {
      key: '2',
      label: 'Catch phrase',
      children: user.company.catchPhrase,
    },
    {
      key: '3',
      label: 'Business slang',
      children: user.company.bs,
    },
  ];

  return (
    <Card className={styles.userInfoTitle}>
      <Descriptions title="Contacts" items={itemsContacts} />
      <Descriptions title="Address" items={itemsAddress} />
      <Descriptions title="Company" items={itemsCompany} />
    </Card>
  );
};

export default MoreInfoAboutUser;
