import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './Home';
import Play_page from './Play_page';
import Song_collection from './Song_collection';
import Account from './Account';
import LogAccount from './LogAccount';
import Search from './Search';
import Lib from './Lib';
import Draft from './Draft';
import { ContextProvider } from '../Components/SongIdArray';
function Pages() {
return (
    <ContextProvider>
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LogAccount />} />
        <Route path ="/content/:name" element={<Song_collection />} />
        <Route path ="/play/:track" element={<Play_page/>} />
        <Route path = "/search" element={<Search/>}/>
        <Route path = "/lib" element= {<Lib/>} />
        <Route path = "/draft" element= {<Draft/>} />
    </Routes>
    </ContextProvider>
)
}

export default Pages