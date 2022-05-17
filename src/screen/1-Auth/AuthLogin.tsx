import React from 'react'
import { API } from '../../config/api';
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

                        {/* <div className="input-group mb-3">
                            <input type="text" onChange={viewModel.onChangeSetUsername} defaultValue={viewModel.username} className="form-control" placeholder="อินเตอร์ rmuti ไม่ต้องเติม @rmuti.ac.th" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" onChange={viewModel.onChangeSetPassowrd} defaultValue={viewModel.password} className="form-control" placeholder="รหัสบัตรประชาชน" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="row">
                            <div className="col-12">
                                <button onClick={() => viewModel.actionLoginRmuti()} className="btn btn-primary btn-block">เข้าสู่ระบบ</button>
                            </div>
                        </div> */}

                        <div style={{ marginBottom: `1%` }}></div>

                        <div className="row">
                            <div className="col-12">
                                <button onClick={() => viewModel.actionGoToRmutiLogin()} className="btn btn-primary btn-block">เข้าสู่ระบบ</button>
                            </div>
                        </div>

                        <div style={{ marginBottom: `1%` }}></div>

                        <div className="row">
                            <div className="col-12">
                                <a href={`${API}/manual_user`} target={`_blank`}><button className="btn btn-warning btn-block">คู่มือการใช้งาน</button></a>
                            </div>
                        </div>


                    </div>
                    {/* /.card-body */}
                </div>
            </div>
        </div>

    )
}

export default AuthLogin