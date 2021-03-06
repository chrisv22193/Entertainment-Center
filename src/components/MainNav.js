import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(value === 0){
      navigate('/')
    }
    else if(value === 1){
      navigate('/movies')
    }
    else if(value === 2){
      navigate('/tv')
    }
    else if(value === 3){
      navigate('/search')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])
  

  return (
    <Box>
      <BottomNavigation 
        className='BottomNavigation'
        onClick={() => window.scroll(0,0)}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
            "&":{
              width: "100%",
              position: "fixed",
              bottom: 0,
              backgroundColor: "#212127",
              zIndex: 100,
            },
            "& .Mui-selected, .Mui-selected > svg":{
              color: "white",
              fontWeight: "bold"
            }
          }}
      >
        <BottomNavigationAction
            style={{ color: "gray", fontWeight:"bold" }}
            label="Trending" 
            icon={<WhatshotIcon />} 
        />
        <BottomNavigationAction 
            style={{ color: "gray", fontWeight:"bold" }}
            label="Movies" 
            icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
            style={{ color: "gray", fontWeight:"bold" }}
            label="TV Series" 
            icon={<TvIcon />} 
        />
        <BottomNavigationAction 
            style={{ color: "gray", fontWeight:"bold" }}
            label="Search" 
            icon={<SearchIcon />} 
        />
      </BottomNavigation>
    </Box>
  );
}