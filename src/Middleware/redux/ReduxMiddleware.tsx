import React, { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from './stateProvider';

export interface ReduxMiddlewareType {
};

const ReduxMiddleware: FC<ReduxMiddlewareType> = (props: PropsWithChildren<ReduxMiddlewareType>) => {
    return (
        <Provider store={store}>
            <PersistGate loading={<h4>... Waiting ...</h4>} persistor={persistor}>
                {props.children}
            </PersistGate>
        </Provider>
    );
};

export default ReduxMiddleware;