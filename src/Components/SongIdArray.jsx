import React, {useContext,useState} from "react";

const SongIdArray = React.createContext();

const ContextProvider = ({ children }) => {
    //This variable will be use through all the file because it seems like the global variable. 
    const [songId, setSongId] = useState([]);
   
    return (
        <SongIdArray.Provider value={{ 
            songId, setSongId
        }}>
            {children}
        </SongIdArray.Provider>
    );
};

export  {SongIdArray, ContextProvider};