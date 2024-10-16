import React from 'react';
import { Menu } from '../menu/Menu';
import styles from './Layout.module.css';


interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <main>{children}</main>
            <Menu />
        </div>
    );
};
