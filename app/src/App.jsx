import React, { useEffect, useState } from 'react';
import styles from './index.scss';
import { Header } from './components/Header';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Quiestions } from './pages/Questions';
import { Users } from './pages/Users';
import axios from 'axios';

export const App = () => {

    useEffect(() => {
        axios.get("http://localhost:8080/api/users").then(({data}) => {
            console.log(data.user_data);
        })
    }, []);


  return (
        <div className={styles.wrapperApp}>
        <div className={styles.container}>
            <Header />
            <div className={styles.content}>
                <Routes>
                    <Route exact path='/' element={<Main />}/>
                    <Route exact path='/questions' element={<Quiestions />}/>
                    <Route exact path='/lists/users' element={<Users />}/>
                </Routes>
            </div>
        </div>
    </div>
  );
}
