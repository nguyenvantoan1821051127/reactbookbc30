import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseStateDemo from './pages/HookDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HookDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HookDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HookDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HookDemo/UseRefDemo/UseRefDemo';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//setup redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import DemoNumber from './pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber';
import DemoFaceBookApp from './pages/HookDemo/UseReduxDemo/DemoFaceBookApp/DemoFaceBookApp';
import LoginDemo from './pages/HookDemo/UseHookRouter/LoginDemo/LoginDemo';
import Home from './pages/HookDemo/UseHookRouter/DemoUseParams/Home';
import Detail from './pages/HookDemo/UseHookRouter/DemoUseParams/Detail';
import DemoUseSearchParams from './pages/HookDemo/UseHookRouter/DemoUseSearchParams/DemoUseSearchParams';
import DemoUseRoute from './pages/HookDemo/CustomHooks/DemoUseRoute';
import AntDDemo from './pages/AntdDemo/AntdDemo';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/scss/styles.scss';
import Login from './pages/Login/Login';
// import tenHinh from 'duong_dan_hinh'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Profile from './pages/Profile/Profile';
import HocDemo from './pages/HOCDemo/HocDemo';
import AdminPage from './pages/AdminPage/AdminPage';
import AdminTemplate from './templates/AdminTemplate';
import Modal from 'antd/lib/modal/Modal';
import DrawerHOC from './HOC/DrawerHOC';

//Cấu hình history (Chuyển hướng không cần hook navigate)
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <DrawerHOC />
        <HistoryRouter history={history}>
            <Routes>
                <Route path='' element={<App />}>
                    <Route index element={<Home />}></Route>
                    <Route path='detail' >
                        <Route path=':id' element={<Detail />} ></Route>
                    </Route>
                    <Route path='search' element={<DemoUseSearchParams />}>

                    </Route>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='profile' element={<Profile />}></Route>

                    <Route path='usestate' element={<UseStateDemo />}></Route>
                    <Route path='customhook' element={<DemoUseRoute />}></Route>
                    <Route path='useeffect' element={<UseEffectDemo />}></Route>
                    <Route path='usecallback' element={<UseCallBackDemo />}></Route>
                    <Route path='usememo' element={<UseMemoDemo />}></Route>
                    <Route path='useref' element={<UseRefDemo />}></Route>
                    <Route path='useredux' element={<DemoNumber />}></Route>
                    <Route path='reduxfbapp' element={<DemoFaceBookApp />}></Route>
                    <Route path='logindemo' element={<LoginDemo />}></Route>
                    <Route path='hoc' element={<HocDemo />}></Route>
                    <Route path='antd' element={<AntDDemo />}></Route>
                </Route>
            </Routes>
            <Routes>
                <Route path='admin' element={<AdminPage />}>
                    <Route index element={<AdminTemplate Component={Login} />}></Route>
                    <Route path='users' element={<AdminTemplate Component={AntDDemo} />}></Route>
                    <Route path='useref' element={<AdminTemplate Component={UseRefDemo} />}></Route>
                </Route>
            </Routes>
        </HistoryRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
