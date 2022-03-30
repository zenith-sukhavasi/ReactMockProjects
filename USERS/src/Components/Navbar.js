import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';




const Navbar = () => {
    const logout = async () => {
        await signOut(auth);
        localStorage.clear()
        window.location.reload(false)
        handleClose()
      };
    
    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
       // console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const handleRouter = (route) => {
    //     console.log(route)
    //     history("/"+route);
    // }
    const user = useSelector((state) => state.users.user)
    //const loggedin = auth.currentUser;
    // const loggedin = user.displayName;
    const loggedin = user.isLoggedIn;

    return (<div className="nav">
        <AppBar color="primary1">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                
                <Typography variant="h6" component="div" sx={{ flexGrow: 1  }}>
                {/* '&:hover':{backgroundColor:'gray',color:'black'} */}
                <Button color="inherit">
                <Link to="/">
                    Home
                    </Link>
                    </Button>
                </Typography>
               

                <Button color="inherit" onClick={handleClick}>Login</Button>
                {!loggedin && <Button color="inherit" onClick={handleClick}>Login</Button>}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    MenuListProps={{
                        "aria-labelledby": "basic-button"
                    }}
                >   <Link to="/profile">
                    <MenuItem onClick={handleClose}>
                   Profile</MenuItem></Link>
                   <Link to="/">
                    <MenuItem onClick={handleClose}>
                        My account</MenuItem></Link>
                    <MenuItem onClick={logout }>Logout</MenuItem>
                    <Link to="/login">
                    <MenuItem onClick={handleClose}>Login</MenuItem>
                    </Link>
                </Menu>
            </Toolbar>
        </AppBar>
        {/* <div className="test">test</div> */}
    </div>);
}

export default Navbar;