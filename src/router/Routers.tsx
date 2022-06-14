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


import AuthLogout from '../screen/1-Auth/AuthLogout';

import Account from '../screen/admin/0-Account/Account';
import Project from '../screen/admin/1-Project/Project';

import { RootState } from '../store/ConfigureStore';
import { useSelector } from 'react-redux';
import { routerPathUser } from '../utils/routerpath';

import ProdAuthen from '../components/ProdAuthen';
import UserAuthen from '../components/UserAuthen';
import Error404 from '../screen/error/Error';
import FormPeoples from '../screen/FormPeoples/FormPeoples';
import FormPublishing from '../screen/FormPublishing/FormPublishing';
import FormProjects from '../screen/FormProjects/FormProjects';
import FormDetails from '../screen/FormDetails/FormDetails';
import FormPotential from '../screen/FormPotential/FormPotential';
import FormAttachment from '../screen/FormAttachment/FormAttachment';
import FormConfirm from '../screen/FormConfirm/FormConfirm';








function Routers() {

    const data = useSelector((state: RootState) => state.user)

    return (
        <BrowserRouter  basename="/regisip" >
            <Routes>
                <Route path="/login" element={<AuthLogin />} />
                <Route path="/login/callback_oauth" element={<AuthLogin />} />
                <Route path="/" element={<UserAuthen><PrivateRoute authentication={data.auth} /></UserAuthen> }>
                    <Route path="/" element={<Main />}>
                        <Route path="/" element={<Navigate to={routerPathUser.Regis} />} />
                        <Route path={routerPathUser.Regis} element={<Regis />} />
                        <Route path={`${routerPathUser.Regis}/create`} element={<RegisCreate />} />
                        <Route path={`${routerPathUser.Regis}/view/:id`} element={<ProdAuthen><RegisView /></ProdAuthen> } />
                        <Route path={`${routerPathUser.Regis}/peoples/:id`} element={<ProdAuthen><FormPeoples /></ProdAuthen> } />
                        <Route path={`${routerPathUser.Regis}/publishing/:id`} element={<ProdAuthen><FormPublishing /></ProdAuthen> } />
                        <Route path={`${routerPathUser.Regis}/projects/:id`} element={<ProdAuthen><FormProjects /></ProdAuthen> } />
                        <Route path={`${routerPathUser.Regis}/details/:id`} element={<ProdAuthen><FormDetails /></ProdAuthen> } />
                        <Route path={`${routerPathUser.Regis}/potentials/:id`} element={<ProdAuthen><FormPotential /></ProdAuthen> } />
                        <Route path={`${routerPathUser.Regis}/attachments/:id`} element={<ProdAuthen><FormAttachment /></ProdAuthen> } />
                        <Route path={`${routerPathUser.Regis}/confirm/:id`} element={<FormConfirm /> } />
                        <Route path="/logout" element={<AuthLogout />} />
                        <Route path="/account" element={<RequireAuth><Account /></RequireAuth>} />
                        <Route path="/project" element={<RequireAuth><Project /></RequireAuth>} />
                        <Route path="*" element={<UserAuthen children={<Error404 />} />} />
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