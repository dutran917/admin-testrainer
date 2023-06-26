import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Space } from 'antd';
import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { deleteCookie } from 'cookies-next';
import { initialAdminProfile } from '@store/ManagerProfile/profile';
import { useProfile } from '@store/ManagerProfile/useProfile';
const { Header, Sider, Content } = Layout;

const AdminLayout = ({ children }: { children: any }) => {
  const [collapsed, setCollapsed] = useState(false);
  //@ts-ignore
  const { profileAdmin, setProfileAdmin } = useProfile();
  console.log(profileAdmin);

  const router = useRouter();
  const handleLogout = () => {
    router.push('/login');
    setProfileAdmin(initialAdminProfile);
    deleteCookie('adminId');
    deleteCookie('accessTokenAdmin');
  };
  const activeMenu = () => {
    switch (router.pathname) {
      case '/user-management':
        return ['1'];
      // case '/admin/apartment-management':
      //   return ['2'];
      default:
        return [];
    }
  };

  return (
    <Layout className={styles.managerLayout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          borderRight: '1px solid rgba(0,0,0,0.1)',
          minWidth: '270px',
          // width: 270px;
        }}
      >
        <div className={styles.logo}>
          {!collapsed && (
            <img
              src='/images/logo.png'
              style={{
                width: '150px',
                height: '50px',
              }}
            />
          )}
        </div>
        <Menu
          theme='light'
          mode='inline'
          defaultSelectedKeys={activeMenu()}
          style={{
            height: '100vh',
            marginTop: '20px',
          }}
          items={[
            {
              key: '1',
              //@ts-ignore
              icon: <UserOutlined />,
              label: (
                <div
                  onClick={() => {
                    router.push('/user-management');
                  }}
                >
                  Quản lý người dùng
                </div>
              ),
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='site-layout-background'
          style={{
            padding: '5px 15px',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* @ts-ignore */}
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          {profileAdmin && (
            <>
              <Space>
                <div
                  style={{
                    fontSize: '18px',
                    fontWeight: 600,
                  }}
                >
                  {profileAdmin?.full_name}
                </div>
                <Button
                  //@ts-ignore
                  icon={<LogoutOutlined />}
                  danger
                  title='Đăng xuất'
                  onClick={handleLogout}
                ></Button>
              </Space>
            </>
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
