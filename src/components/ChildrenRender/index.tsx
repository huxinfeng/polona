import { ProLayoutProps, SettingDrawer } from '@ant-design/pro-components';

import { getInitialState } from '@/app';

type InitialStateType = Awaited<ReturnType<typeof getInitialState>> | undefined;
interface ChildrenRenderProps {
  childrenDom: JSX.Element;
  childrenProps: ProLayoutProps;
  initialState: InitialStateType;
  setInitialState: (
    initialState: InitialStateType | ((initialState: InitialStateType) => InitialStateType),
  ) => Promise<void>;
}

const ChildrenRender: React.FC<ChildrenRenderProps> = props => {
  const { childrenDom, childrenProps, initialState, setInitialState } = props;
  return (
    <>
      {childrenDom}
      {!childrenProps.location?.pathname?.includes('/login') && (
        <SettingDrawer
          enableDarkTheme
          settings={initialState?.layoutSettings}
          onSettingChange={layoutSettings => {
            setInitialState(preInitialState => ({
              ...preInitialState,
              layoutSettings,
            }));
          }}
        />
      )}
    </>
  );
};

export default ChildrenRender;
