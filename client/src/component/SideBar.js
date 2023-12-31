import React from 'react';
import { Drawer,styled } from '@mui/material';
import SideBarContent from './SideBarContent';

export default function SideBar({openDrawer}) {
  return (
    // <div>SideBar Page</div>
    <Drawer
        anchor='left'
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted:true
        }}
        variant='persistent'
        sx={{
            '& .MuiDrawer-paper':{
                marginTop:'64px',
                width:250,
                background:'#F5F5F5',
                borderRight:'none',
                height:'calc(100vh - 64px)'
            }
        }}
    >
        <SideBarContent openSidebar={openDrawer}/>
    </Drawer>
  )
}
