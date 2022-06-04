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
import Furtherdev from '../screen/5-Furtherdev/Furtherdev';
import Keyword from '../screen/6-Keyword/Keyword';
import Movant from '../screen/7-Movant/Movant';
import Fund from '../screen/8-Fund/Fund';
import Budget from '../screen/9-Budget/Budget';
import Bioreso from '../screen/11-Bioreso/Bioreso';
import Results from '../screen/12-Results/Results';
import Infer from '../screen/13-Infer/Infer';
import Market from '../screen/16-Market/Market';
import Assessment from '../screen/17-Assessment/Assessment';
import Worksip from '../screen/18-Worksip/Worksip';
import TechLv from '../screen/19-TechLv/TechLv';


import AuthLogout from '../screen/1-Auth/AuthLogout';

import Account from '../screen/admin/0-Account/Account';
import Project from '../screen/admin/1-Project/Project';

import { RootState } from '../store/ConfigureStore';
import { useSelector } from 'react-redux';
import { routerPathUser } from '../utils/routerpath';
import Publicip from '../screen/20-Publicip/Publicip';
import ProdAuthen from '../components/ProdAuthen';
import UserAuthen from '../components/UserAuthen';
import Error404 from '../screen/error/Error';
import FormPeoples from '../screen/FormPeoples/FormPeoples';
import FormPublishing from '../screen/FormPublishing/FormPublishing';
import FormProjects from '../screen/FormProjects/FormProjects';
import FormDetails from '../screen/FormDetails/FormDetails';
import FormPotential from '../screen/FormPotential/FormPotential';
import FormAttachment from '../screen/FormAttachment/FormAttachment';








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