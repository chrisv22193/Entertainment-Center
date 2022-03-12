import { Button, createTheme, Tab, Tabs, TextField, ThemeProvider } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search"

const Search = () => {

  const [type, setType] = useState(0)

  const darkTheme = createTheme({
    palette:{
      mode: "dark",
      primary:{
        main: "#fff",
      }
    }
  })

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display: "flex", margin: "15px 0"}}>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button variant='contained' style={{marginLeft: 10}}> 
            <SearchIcon/> 
          </Button>
        </div>

        <Tabs value={type} indicatorColor='primary' textColor='primary'>
          <Tab style={{ width: "50%" }} label="Search Movies"/>
          <Tab style={{ width: "50%" }} label="Search TV Series"/>
        </Tabs>

      </ThemeProvider>
    </div>
  )
}

export default Search