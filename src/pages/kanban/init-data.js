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
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        },
        {
            id: 'task-3',
            title: 'Handling breaking changes',
            userStory: '2469',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, quae repudiandae?'
        },
        {
            id: 'task-4',
            title: 'Creation and Maintenance of Inventory Objects',
            userStory: '2469',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!'
        }
    ],
    // keep all the column's ids.
    cards: {
        'card-1': {
            id: 'card-1',
            title: 'New',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'card-2': {
            id: 'card-2',
            title: 'Active',
            taskIds: []
        },
        'card-3': {
            id: 'card-3',
            title: 'Completed',
            taskIds: []
        }
    }
};
