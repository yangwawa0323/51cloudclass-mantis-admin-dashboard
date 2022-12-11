// assets
import { LoginOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Login',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'register1',
            title: 'Register',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'profile',
            type: 'collapse',
            title: 'Profile',
            // url: '/profile',
            icon: icons.UserOutlined,
            children: [
                {
                    id: 'fake1',
                    type: 'item',
                    title: 'User Profile',
                    url: '/user-profile',
                    target: false
                }
            ]
        }
    ]
};

export default pages;
