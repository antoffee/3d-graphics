import React from 'react';
import cnBind, { Argument } from 'classnames/bind';

import styles from './FullScreenWrapper.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const FullScreenWrapper: React.FC = ({ children }) => {
    return <div className={cx('wrapper')}>{children}</div>;
};
