import React, { useEffect } from 'react';
import { profile } from '../../axios/auth/login';
import Appbar from '../Appbar';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children }) {
  useEffect(() => {
    profile()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="w-full h-screen bg-blue-400">
      <Appbar />
      <aside className="h-[calc(100vh-64px)] w-80 bg-slate-950 flex flex-col p-4 text-white text-lg gap-2">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/users">Users</Link>
      </aside>
    </div>
  );
}
