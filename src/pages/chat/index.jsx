/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useMediaQuery, Container, SwipeableDrawer, Box, Drawer, Typography, IconButton } from '@mui/material';
import { useRef, useEffect, useState, useMemo } from 'react';
import { makeStyles } from '@mui/styles';
import { FilterOutlined } from '@ant-design/icons';
import UserListCard from './components/UserListCard';
import ChatDetail from './components/ChatDetail';
import { useCallback } from 'react';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    drawer: {
        position: 'relative',
        // marginRight: 'auto',
        width: 330,
        '& .MuiBackdrop-root': {
            display: 'none'
        },
        '& .MuiDrawer-paper': {
            width: 320,
            position: 'absolute',
            height: (props) => props.height,
            transition: 'none !important'
        }
    }
});

const Chat = (props) => {
    const [open, setOpen] = useState(true);
    const containerRef = useRef();
    const [height, setHeight] = useState(0);

    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const classes = useStyles({ height: height });

    const userListCard = useMemo(() => <UserListCard />, []);

    const useUserListCard = useCallback((open) => {
        if (open) {
            return (
                <Drawer open={open && !matchDownSM} className={classes.drawer} variant="persistent" anchor="left">
                    {userListCard}
                </Drawer>
            );
        } else {
            return <></>;
        }
    }, []);

    useEffect(() => {
        if (open) {
            setHeight(containerRef.current.clientHeight);
        } else {
            setHeight(0);
        }
    }, [open]);

    const handleFilterIconClick = () => {
        setOpen(!open);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{ height: 'calc(100vh - 120px)', outline: '1px solid #f0f0f0', padding: '0px !important' }}>
            <Box ref={containerRef} style={{ position: 'relative', height: '100%' }} display="flex" component="div">
                {useUserListCard(open)}
                <SwipeableDrawer
                    sx={{
                        display: { xs: 'block', md: 'hidden' },
                        '& .MuiDrawer-paper': {
                            width: 320
                            // transition: 'none !important'
                        }
                    }}
                    open={open && matchDownSM}
                    onOpen={() => {}}
                    onClose={handleDrawerClose}
                    anchor="left"
                >
                    {userListCard}
                </SwipeableDrawer>
                <ChatDetail onClick={handleFilterIconClick} status={open} />
            </Box>
        </Container>
    );
};

export default Chat;
