import { EditOutlined, PlusSquareOutlined, UngroupOutlined } from '@ant-design/icons';
import { PageContainer, ProList } from '@ant-design/pro-components';
import { FormattedMessage, request, useIntl } from '@umijs/max';
import { useCreation } from 'ahooks';
import { Badge, Button, Dropdown, Grid, Image, MenuProps, message, Tag, Tooltip } from 'antd';

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
interface IParams {
  /** 当前页 */
  current?: number;
  /** 页面大小 */
  pageSize?: number;
  /** 项目名称 */
  name?: string;
  /** 状态 */
  status?: number;
}

const Project: React.FC = () => {
  // 缓存计算 column 长度
  const screens = Grid.useBreakpoint();
  const column = useCreation(() => {
    return Object.entries(screens).filter(screen => !!screen[1]).length;
  }, [screens]);

  // actions 操作栏及相关触发函数
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    message.info('Click on left button.');
    console.log('click left button', e);
  };
  const handleMenuClick: MenuProps['onClick'] = e => {
    message.info('Click on menu item.');
    console.log('click', e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  /** 获取可视化项目列表 */
  const getProjectList = async (params: IParams) =>
    request<{ data: IProjectItem[] }>('https://mock.apifox.cn/m1/2220998-0-default/project/list', { params });

  /**
   * 国际化
   */
  const intl = useIntl();
  const intl_title = intl.formatMessage({ id: 'page.project.ProList.title' });
  const intl_titleTip = intl.formatMessage({ id: 'page.project.ProList.titleTip' });
  // metas
  const intl_projectName = intl.formatMessage({ id: 'page.project.ProList.search.projectName' });
  const intl_tag = intl.formatMessage({ id: 'page.project.ProList.search.tag' });
  const intl_icon = intl.formatMessage({ id: 'page.project.ProList.search.icon' });
  const intl_previewImage = intl.formatMessage({ id: 'page.project.ProList.search.previewImage' });
  const intl_release = intl.formatMessage({ id: 'page.project.ProList.search.release' });
  const intl_status = intl.formatMessage({ id: 'page.project.ProList.search.status' });
  const intl_published = intl.formatMessage({ id: 'page.project.ProList.status.published' });
  const intl_unpublished = intl.formatMessage({ id: 'page.project.ProList.status.unpublished' });
  const intl_edit = intl.formatMessage({ id: 'cardToolbar.edit' });

  return (
    <PageContainer
      header={{
        title: '',
      }}
    >
      <ProList<IProjectItem>
        rowKey="id"
        headerTitle={intl_title}
        tooltip={intl_titleTip}
        grid={{
          gutter: 30,
          column: column,
        }}
        pagination={{
          defaultPageSize: 10,
          showSizeChanger: true,
        }}
        metas={{
          title: {
            dataIndex: 'name',
            title: intl_projectName,
          },
          subTitle: {
            dataIndex: 'tag',
            title: intl_tag,
            search: false,
            render: dom => {
              return <Tag color="#5BD8A6">{dom}</Tag>;
            },
          },
          avatar: {
            dataIndex: 'icon',
            title: intl_icon,
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
            title: intl_previewImage,
            search: false,
            render: dom => {
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
            title: intl_release,
            search: false,
            cardActionProps: 'actions',
            render: (_, entity) => {
              return [
                <Badge
                  key="badge"
                  status="processing"
                  color={entity.release ? 'green' : 'yellow'}
                  text={entity.release ? intl_published : intl_unpublished}
                  style={{ flex: 1 }}
                />,
                <Dropdown.Button key="dropdown" arrow menu={menuProps} onClick={handleButtonClick} style={{ flex: 1 }}>
                  <Tooltip title={intl_edit} placement="bottom">
                    <EditOutlined />
                  </Tooltip>
                </Dropdown.Button>,
              ];
            },
          },
          // 自己扩展的字段，主要用于筛选，不在列表中显示
          status: {
            title: <Badge status="processing" text={intl_status} />,
            valueType: 'select',
            valueEnum: {
              0: {
                text: intl_unpublished,
                status: 'unpublished',
              },
              1: {
                text: intl_published,
                status: 'published',
              },
            },
          },
        }}
        search={{ filterType: 'light' }}
        request={getProjectList}
        toolBarRender={() => {
          return [
            <Button key="add" icon={<PlusSquareOutlined />}>
              <FormattedMessage id="page.project.ProList.create" />
            </Button>,
          ];
        }}
        onItem={record => {
          return {
            onClick: e => {
              console.log(record, e);
            },
          };
        }}
      />
    </PageContainer>
  );
};

export default Project;
