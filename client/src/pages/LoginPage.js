//用于显示登录页面
import React from 'react';
import AuthForm from '../components/AuthForm';

const LoginPage = () => {
  return (
    <div>
      <h1>登录</h1>
      <AuthForm isLogin />
    </div>
  );
};

export default LoginPage;
