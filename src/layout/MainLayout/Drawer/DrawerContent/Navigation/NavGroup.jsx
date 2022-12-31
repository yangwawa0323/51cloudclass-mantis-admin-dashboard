import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// material-ui
import { Box, List, Typography, Collapse } from '@mui/material';

// project import
import NavItem from './NavItem';

// ==============================|| NAVIGATION - LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
    const menu = useSelector((state) => state.menu);
    const { drawerOpen } = menu;
    const [open, setOpen] = React.useState(true);

    const toggleCollapse = () => {
        setOpen(!open);
    };

    const navCollapse = (menuItem) => {
        return menuItem?.children?.map((childMenu) => {
            switch (childMenu.type) {
                case 'collapse':
                    const childrenMenu = childMenu.children?.map((menu, index) => {
                        return <NavItem key={index} item={menu} level={2} />;
                    });
                    return <NavItem key={childMenu.id} item={childMenu} level={1} childrenMenu={childrenMenu} />;
                case 'item':
                    return <NavItem key={childMenu.id} item={childMenu} level={1} />;
                default:
                    return (
                        <Typography key={childMenu.id} variant="h6" color="error" align="center">
                            {childMenu.title}
                        </Typography>
                    );
            }
        });
    };

    return (
        <List
            subheader={
                item.title &&
                drawerOpen && (
                    <Box sx={{ pl: 3, mb: 1.5 }}>
                        <Typography variant="subtitle2" color="textSecondary">
                            {item.title}
                        </Typography>
                        {/* only available in paid version */}
                    </Box>
                )
            }
            sx={{ mb: drawerOpen ? 1.5 : 0, py: 0, zIndex: 0 }}
        >
            {navCollapse(item)}
        </List>
    );
};

NavGroup.propTypes = {
    item: PropTypes.object
};

export default NavGroup;
