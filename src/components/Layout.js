import React from "react";
import { Drawer,List,ListItem,ListItemIcon,ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useNavigate,useLocation } from "react-router-dom";


const drawerWidth =240

const menuItems =[
    {
        text:'My Notes',
        icon:<SubjectOutlined color='secondary' />,
        path:'/'
    },
    {
        text:'Create Note',
        icon:<AddCircleOutlineOutlined color='secondary' />,
        path:'/create'
    }
]

const useStyles =makeStyles({
        page: {
            background:'#f9f9f9',
            width:'100%',
        },
        drawer:{
            width: drawerWidth,
        },
        drawerPaper:{
            width: drawerWidth,
        },
        root:{
            display:'flex',
        },
        active:{
            background:'#f4f4f4'
        },

    
    
    
})

export default function Layout({children}) {
    const classes =useStyles();
    const navigate =useNavigate();
    const location =useLocation();
    
    return(
        <div className={classes.root}>

            <Drawer
            className={classes.drawer}
            anchor='left'
            variant='permanent'
            classes={{paper:classes.drawerPaper}}
            >
                <div>
                    <Typography
                    variant="h5"
                    
                    >Ninja Note</Typography>

                    <List>
                        {menuItems.map(item =>(
                            <ListItem
                            key={item.text}
                            button
                            onClick={() => navigate(item.path)}
                            className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}

                    </List>
                </div>
            </Drawer>



            <div className={classes.page}>
                {children}
            </div>

            
            
        </div>
    )
}








{/* <Drawer
            variant="permanent"
            anchor="left"
            style={{
                width:240
            }}
             classes={{paper:}}
            >

                <div>
                    <Typography variant='h5'>
                        Ninja Notes
                    </Typography>
                </div>



            </Drawer>





            <div
            style={{
                background: '#f9f9f9',
                width:'100%'
            }}
            >
            {children}
            </div> */}