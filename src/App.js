import { useRoutes } from 'react-router-dom'
import './app.less'
import { useState } from 'react';
import { getRoutesConfig } from './routes/config';

export default function App() {
  // const isLogin = false
  const routes = useRoutes(getRoutesConfig())
  return routes
}
