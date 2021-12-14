/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */

import cn from 'classnames';
import React, {Suspense, lazy} from 'react';

import {stylesContainer} from './app.module.less';
import {stylesHeader, stylesImage, stylesLink} from './app.module.scss';

import { SharedWorkerProvider } from '@src/providers';
import OrderBook from '../OrderBook';

const LazyStrawberryIcon = lazy(() => import('./strawberry'));
export const App = (): React.ReactElement => (
    <div className={stylesContainer}>
        <div className={stylesHeader}>It works</div>
        <Suspense fallback={'loading...'}>
            <LazyStrawberryIcon className={stylesImage} />
        </Suspense>
        <div>
            <a
                className={cn(stylesLink)}
                href="https://github.com/glook/webpack-typescript-react"
                target="_blank"
            >
                @glook/webpack-typescript-react
            </a>
        </div>
    </div>
);
