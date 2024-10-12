import React, { Fragment, ReactNode } from 'react';
import { MainHeader } from '~/components';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <MainHeader />
            {children}
        </Fragment>
    );
};

export { MainLayout };
