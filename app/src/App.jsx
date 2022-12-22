import React from 'react';
import styles from './index.scss';
import { Header } from './components/Header';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Main } from './pages/Main';
import { Quiestions } from './pages/Questions';
import { Users } from './pages/Users';

export const App = () => {
  return (
        <div class={styles.wrapperApp}>
        <div class={styles.container}>
            <Header />
            <div class={styles.content}>
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
