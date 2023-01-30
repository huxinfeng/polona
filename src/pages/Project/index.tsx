import {
  EditOutlined,
  PlusSquareOutlined,
  UngroupOutlined,
} from '@ant-design/icons';
import { PageContainer, ProList } from '@ant-design/pro-components';
import { useCreation } from 'ahooks';
import {
  Badge,
  Button,
  Dropdown,
  Grid,
  Image,
  MenuProps,
  message,
  Tag,
  Tooltip,
} from 'antd';

import FallbackPng from '@/assets/images/fallback.png';
import { items } from './configure';

interface IProjectItem {
  /** 项目ID编号 */
  id: number;
  /** 项目名称 */
  name: string;
  /** 标签 */
  tag: string;
  /** 预览图 */
  image: string;
  /** 是否发布 */
  release: boolean;
}

const data: IProjectItem[] = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
  'Ant Design Pro',
].map((item, index) => ({
  id: index,
  name: item,
  tag: '官方',
  image: 'error',
  release: true,
}));

const Project: React.FC = () => {
  // 缓存计算 column 长度
  const screens = Grid.useBreakpoint();
  const column = useCreation(() => {
    return Object.entries(screens).filter((screen) => !!screen[1]).length;
  }, [screens]);

  // actions 操作栏及相关触发函数
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <PageContainer
      header={{
        title: '',
      }}
    >
      <ProList<IProjectItem>
        rowKey="id"
        headerTitle="可视化项目列表"
        tooltip="可视化列表的配置"
        grid={{
          gutter: 30,
          column: column,
        }}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        dataSource={data}
        metas={{
          title: {
            dataIndex: 'name',
            title: '项目名称',
          },
          subTitle: {
            dataIndex: 'tag',
            title: '标签',
            search: false,
            render: (dom) => {
              return <Tag color="#5BD8A6">{dom}</Tag>;
            },
          },
          avatar: {
            dataIndex: 'icon',
            title: '图标',
            search: false,
            render: () => {
              return (
                <UngroupOutlined
                  style={{
                    color: '#7E37D6',
                    marginRight: '5px',
                    marginLeft: '-10px',
                  }}
                />
              );
            },
          },
          content: {
            dataIndex: 'image',
            title: '预览图片',
            search: false,
            render: (dom) => {
              return (
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Image src={dom as string} fallback={FallbackPng} />
                </div>
              );
            },
          },
          actions: {
            dataIndex: 'release',
            title: '是否发布',
            search: false,
            cardActionProps: 'actions',
            render: (_, entity) => {
              return [
                <Badge
                  key="badge"
                  status="processing"
                  color={entity.release ? 'green' : 'yellow'}
                  text={entity.release ? '已发布' : '未发布'}
                  style={{ flex: 1 }}
                />,
                <Dropdown.Button
                  key="dropdown"
                  arrow
                  menu={menuProps}
                  onClick={handleButtonClick}
                  style={{ flex: 1 }}
                >
                  <Tooltip title="编辑" placement="bottom">
                    <EditOutlined />
                  </Tooltip>
                </Dropdown.Button>,
              ];
            },
          },
          // 自己扩展的字段，主要用于筛选，不在列表中显示
          status: {
            title: <Badge status="processing" text="状态" />,
            valueType: 'select',
            valueEnum: {
              0: {
                text: '未发布',
                status: 'unpublished',
              },
              1: {
                text: '已发布',
                status: 'published',
              },
            },
          },
        }}
        search={{ filterType: 'light' }}
        toolBarRender={() => {
          return [
            <Button key="add" icon={<PlusSquareOutlined />}>
              新建
            </Button>,
          ];
        }}
        onItem={(record) => {
          return {
            onClick: (e) => {
              console.log(record, e);
            },
          };
        }}
      />
    </PageContainer>
  );
};

export default Project;
