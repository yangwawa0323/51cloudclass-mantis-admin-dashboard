import { CheckOutlined, ShoppingOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from '@mui/material';

export const kanBanInitialData = {
    tasks: [
        {
            id: 'task-1',
            title: 'Online fees payment & instant announcements',
            userStory: '8887',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ad.'
        },
        {
            id: 'task-2',
            title: 'Attendance checking & homework details',
            userStory: '8887',
            image: 'https://mantisdashboard.io/static/media/profile-back-1.d7167415939d4c4bb144.png',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            id: 'task-3',
            title: 'Handling breaking changes',
            userStory: '2469',
            image: 'https://mantisdashboard.io/static/media/profile-back-4.accff5d496567bf25b76.png',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quae repudiandae?'
        },
        {
            id: 'task-4',
            title: 'Creation and Maintenance of Inventory Objects',
            userStory: '2469',
            image: 'https://mantisdashboard.io/static/media/profile-back-2.bdce0a05636b0d7a8672.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!'
        },
        {
            id: 'task-5',
            title: 'Purchase Requisitions, Adjustments, and Transfers.',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta fugit neque molestiae tempora!'
        },
        {
            id: 'task-6',
            title: 'Run codemods',
            description: 'Lorem ipsum dolor sit amet.'
        }
    ],
    // keep all the column's ids.
    cards: {
        'card-1': {
            id: 'card-1',
            title: 'New',
            taskIds: ['task-1', 'task-2', 'task-6']
        },
        'card-2': {
            id: 'card-2',
            title: 'Active',
            taskIds: ['task-3', 'task-4']
        },
        'card-3': {
            id: 'card-3',
            title: 'Completed',
            taskIds: ['task-5']
        }
    }
};

export const status = [
    {
        id: 1,
        name: 'Maddison Wilber',
        state: 'completed',
        username: 'John Deo',
        position: 'Project Leader',
        due: 'Jun, 26',
        lastlog: '5 min ago',
        priority: 'Low',
        avatar: 'data:image/png;base64,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'
    },
    {
        id: 2,
        state: 'rejected',
        name: 'Barney Thea',
        username: 'Jenifer Vintage',
        position: 'HR Manager',
        due: 'March, 31',
        lastlog: '1 hour ago',
        priority: 'Lower',
        avatar: 'data:image/png;base64,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'
    },
    {
        id: 3,
        state: 'pending',
        name: 'John Doe',
        username: 'William Jem',
        position: 'Developer',
        due: 'Aug, 02',
        lastlog: 'Yesterday',
        priority: 'Medium',
        avatar: 'data:image/png;base64,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'
    },
    {
        id: 4,
        state: 'pending',
        name: 'David Jones',
        username: 'David Jones',
        position: 'UI/UX Designer',
        due: 'Sep, 22',
        lastlog: '02-05-2022',
        priority: 'High',
        avatar: 'data:image/png;base64,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'
    },
    {
        id: 5,
        state: 'completed',
        name: 'Berry',
        username: 'Stebin Ben',
        position: 'Leader',
        due: 'Sep, 22',
        lastlog: 'Yesterday',
        priority: 'Higher',
        avatar: 'data:image/png;base64,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'
    }
];

export const latestMessages = [
    {
        id: 1,
        time: '2 hours ago',
        avatar: (
            <Avatar size="small" sx={{ color: 'rgb(19, 194, 194)', backgroundColor: 'rgb(230, 255, 251)' }}>
                <TwitterOutlined style={{ fontSize: '16px' }} />
            </Avatar>
        ),
        title: '+ 1652 Followers',
        description: 'You’re getting more and more followers, keep it up!'
    },
    {
        id: 2,
        time: '4 hours ago',
        avatar: (
            <Avatar size="small" sx={{ color: 'rgb(255, 77, 79)', backgroundColor: 'rgb(255, 241, 240)' }}>
                <ShoppingOutlined style={{ fontSize: '16px' }} />
            </Avatar>
        ),
        title: '+ 5 New Products were added!',
        description: 'Congratulations!'
    },
    {
        id: 3,
        time: '1 day ago',
        avatar: (
            <Avatar size="small" sx={{ color: 'rgb(82, 196, 26)', backgroundColor: 'rgb(246, 255, 237)' }}>
                <CheckOutlined style={{ fontSize: '16px' }} />
            </Avatar>
        ),
        title: 'Database backup completed!',
        description: 'Download the latest backup.'
    },
    {
        id: 4,
        time: '2 day ago',
        avatar: (
            <Avatar size="small" sx={{ color: 'rgb(24, 144, 255)', backgroundColor: 'rgb(230, 247, 255)' }}>
                <UserOutlined style={{ fontSize: '16px' }} />
            </Avatar>
        ),
        title: '2 Friend Requests',
        description: 'Congratulations!This is great, keep it up!'
    }
];

export const productSales = [
    { id: 1, last: 2136, name: 'Head phone', price: '$ 926.23' },
    { id: 2, last: 2546, name: 'Iphone V', price: '$ 485.85' },
    { id: 3, last: 2681, name: 'Jacket', price: '$ 784.6' },
    { id: 4, last: 2756, name: 'Head phone', price: '$ 563.45' },
    { id: 5, last: 8765, name: 'Sofa', price: '$ 769.45' },
    { id: 6, last: 3652, name: 'Iphone X', price: '$ 754.45' }
];
