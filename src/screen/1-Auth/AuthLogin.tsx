import React from 'react'
import { titleConfig } from '../../config/title';
import LoginVM from '../../viewmodel/1-Auth/LoginVM';


function AuthLogin() {

    const viewModel = LoginVM()

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h3>{titleConfig.NameWeb}</h3>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* /.col */}
                            <div className="col-12">
                                <button onClick={() => viewModel.actionLogin()} className="btn btn-primary btn-block">Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>

                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>

    )
}

export default AuthLogin