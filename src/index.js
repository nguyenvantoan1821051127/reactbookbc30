import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseStateDemo from './pages/HookDemo/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/HookDemo/UseEffectDemo/UseEffectDemo';
import UseCallBackDemo from './pages/HookDemo/UseCallBackDemo/UseCallBackDemo';
import UseMemoDemo from './pages/HookDemo/UseMemoDemo/UseMemoDemo';
import UseRefDemo from './pages/HookDemo/UseRefDemo/UseRefDemo';
import { store } from './redux/configStore'
import { Provider } from 'react-redux'
import DemoNumber from './pages/HookDemo/UseReduxDemo/DemoNumber/DemoNumber';
import DemoFaceBookApp from './pages/HookDemo/UseReduxDemo/DemoFaceBookApp/DemoFaceBookApp';
import LoginDemo from './pages/HookDemo/UseHookRouter/LoginDemo/LoginDemo'
import Detail from './pages/HookDemo/UseHookRouter/DemoUseParams/Detail';
import Home from './pages/HookDemo/UseHookRouter/DemoUseParams/Home';
import DemoUseSearchParams from './pages/HookDemo/UseHookRouter/DemoUseSearchParams/DemoUseSearchParams';
import DemoUseRoute from './pages/HookDemo/CustomHooks/DemoUseRoute';
import 'antd/dist/antd.css';
import AntdDemo from './pages/AntdDemo/AntdDemo';
import './assets/scss/style.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App></App>}>
          <Route index element={<Home></Home>}></Route>
          {/* <Route path='home' element={<Home></Home>}></Route> */}
          <Route path='detail'>
            <Route path=':id' element={<Detail></Detail>}></Route>
          </Route>
          <Route path='search' element={<DemoUseSearchParams></DemoUseSearchParams>}></Route>

          <Route path='customhook' element={<DemoUseRoute></DemoUseRoute>}></Route>

          <Route path='usestate' element={<UseStateDemo></UseStateDemo>}></Route>
          <Route path='useeffect' element={<UseEffectDemo></UseEffectDemo>}></Route>
          <Route path='usecallback' element={<UseCallBackDemo></UseCallBackDemo>}></Route>
          <Route path='usememodemo' element={<UseMemoDemo></UseMemoDemo>}></Route>
          <Route path='useref' element={<UseRefDemo></UseRefDemo>}></Route>
          <Route path='useredux' element={<DemoNumber></DemoNumber>}></Route>
          <Route path='demofacebook' element={<DemoFaceBookApp></DemoFaceBookApp>}></Route>
          <Route path='login' element={<LoginDemo></LoginDemo>}></Route>
          <Route path='antd' element={<AntdDemo></AntdDemo>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
