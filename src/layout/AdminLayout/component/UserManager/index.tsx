import React from 'react';
import styles from './index.module.scss';
import { Form, Input, Row, Select, Tooltip, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import { CheckOutlined, CloseOutlined, EyeOutlined } from '@ant-design/icons';
const UserManager = () => {
  const [form] = Form.useForm();
  const searchForm = (
    <div className={styles.searchForm}>
      <Form layout='inline' form={form}>
        <Form.Item name='searchValue'>
          <Input.Search
            placeholder='Tìm kiếm người dùng'
            // onSearch={submit}
          />
        </Form.Item>
        <Form.Item>
          <Select
            style={{
              width: '200px',
            }}
            placeholder='Trạng thái'
            options={[
              {
                label: 'Đang chờ duyệt',
                value: 1,
              },
              {
                label: 'Đã duyệt',
                value: 2,
              },
              {
                label: 'Từ chối',
                value: 3,
              },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  );
  const mockData = [
    {
      id: 1,
      full_name: 'Bao HN',
      phone: '039991234',
      email: 'provip@gmail.com',
      type: 'Giáo viên',
      status: 'APPROVED',
    },
    {
      id: 2,
      full_name: 'DU pRON',
      phone: '039991234',
      type: 'Giáo viên',
      email: 'provip@gmail.com',
      status: 'APPROVED',
    },
    {
      id: 3,
      full_name: 'DU pRON',
      phone: '039991234',
      email: 'provip@gmail.com',
      status: 'PENDING',
      type: 'Giáo viên',
    },
  ];
  const columns: ColumnsType<any> = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'full_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Vai trò',
      dataIndex: 'type',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
    },
    {
      title: 'Hành động',
      width: '10%',
      align: 'center',
      render: (_, record) => (
        <Row justify='space-between'>
          <Tooltip title='Xem'>
            {/* @ts-ignore */}
            <EyeOutlined
              style={{
                color: 'purple',
                cursor: 'pointer',
              }}
            />
          </Tooltip>
          <Tooltip title='Duyệt'>
            {/* @ts-ignore */}
            <CheckOutlined
              style={{
                color: 'green',
                cursor: 'pointer',
              }}
            />
          </Tooltip>
          <Tooltip title='Xem'>
            {/* @ts-ignore */}
            <CloseOutlined
              style={{
                color: 'red',
                cursor: 'pointer',
              }}
            />
          </Tooltip>
        </Row>
      ),
    },
  ];
  return (
    <div>
      <div className={styles.title}>Quản lý người dùng</div>
      {searchForm}

      <Table columns={columns} dataSource={mockData} rowKey={(item) => item.id} />
    </div>
  );
};

export default UserManager;
