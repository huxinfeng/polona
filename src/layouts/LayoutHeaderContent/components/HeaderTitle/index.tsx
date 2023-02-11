import { AppleFilled } from '@ant-design/icons';
import { useIntl, useParams } from '@umijs/max';
import { useBoolean, useCreation, useMemoizedFn, useReactive, useWhyDidYouUpdate } from 'ahooks';
import { Button, Input, InputRef, Space } from 'antd';
import { useRef } from 'react';

const HeaderTitle: React.FC = () => {
  /**
   * ===========================================================================
   * ================================== 国际化 ==================================
   * ===========================================================================
   */
  const intl = useIntl();
  const intl_workspace = intl.formatMessage({ id: 'chart.header.title.workspace' });
  const intl_placeholder = intl.formatMessage({ id: 'chart.header.title.placeholder' });
  const intl_newProject = intl.formatMessage({ id: 'chart.header.title.newProject' });

  const params = useParams();
  const state = useReactive({
    inputVal: params.id,
  });

  const [clickState, { setTrue, setFalse }] = useBoolean();
  const ref = useRef<InputRef>(null);

  const handleBlur = useMemoizedFn(() => {
    state.inputVal = ref.current?.input?.value || intl_newProject;

    setFalse();
  });

  /** 渲染标题组件 */
  const renderTitleComponent = useCreation(() => {
    return (
      <Space>
        {intl_workspace}
        {clickState ? (
          <Input
            ref={ref}
            placeholder={intl_placeholder}
            size="small"
            maxLength={16}
            showCount
            allowClear
            autoFocus
            defaultValue={state.inputVal}
            onBlur={handleBlur}
            onPressEnter={handleBlur}
          />
        ) : (
          <Button shape="round" size="small" onClick={setTrue}>
            {state.inputVal}
          </Button>
        )}
      </Space>
    );
  }, [clickState]);

  /**
   * ===========================================================================
   * =================================== dev ===================================
   * ===========================================================================
   */
  useWhyDidYouUpdate('chart', { inputVal: state.inputVal, clickState });

  return (
    <Space>
      {/* 图标 */}
      <AppleFilled />
      {/* 标题组件 */}
      {renderTitleComponent}
    </Space>
  );
};

export default HeaderTitle;
