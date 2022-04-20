import React from 'react'


import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';
//import PublicRoute from './PublicRoute';

import Main from '../components/template/Main';

import AuthLogin from '../screen/1-Auth/AuthLogin';

import Regis from '../screen/0-Regis/Regis';
import RegisCreate from '../screen/0-Regis/RegisCreate';
import RegisView from '../screen/0-Regis/RegisView';


import People from '../screen/3-People/People';
import Publicize from '../screen/4-Publicize/Publicize';


import AuthLogout from '../screen/1-Auth/AuthLogout';

import Account from '../screen/admin/0-Account/Account';

import { RootState } from '../store/ConfigureStore';
import { useSelector } from 'react-redux';
import { routerPathUser } from '../utils/routerpath';



function Routers() {

    const data = useSelector((state: RootState) => state.user)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/" element={<PrivateRoute authentication={data.auth} />}>
                    <Route path="/" element={<Main />}>
                        <Route path="/" element={<Navigate to={routerPathUser.Regis} />} />
                        <Route path={routerPathUser.Regis} element={<Regis />} />
                        <Route  path={`${routerPathUser.Regis}/create`} element={<RegisCreate />} />
                        <Route path={`${routerPathUser.Regis}/view/:id`} element={<RegisView />} />
                        <Route path={`${routerPathUser.Regis}/people/:id`} element={<People />} />
                        <Route path={`${routerPathUser.Regis}/publicize/:id`} element={<Publicize />} />
                        <Route path="/logout" element={<AuthLogout />} />
                        <Route path="/account" element={<RequireAuth><Account /></RequireAuth>} />
                    </Route>
                </Route>

            </Routes>

        </BrowserRouter>
    )
}


function RequireAuth({ children }: { children: JSX.Element }) {

    const data = useSelector((state: RootState) => state.user)

    if (data.data.role !== 'admin') {
        return <Navigate to="/login" />;
    }

    return children;
}

export default Routers