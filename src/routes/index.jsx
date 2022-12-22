import * as React from 'react';

// project import
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';
import { useRoutes } from 'react-router-dom';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return useRoutes([LoginRoutes, MainRoutes]);
    // return useRoutes([MainRoutes]);
}
