import React from 'react';
import {
    Grid,
    Card,
    CardHeader,
    Avatar,
    IconButton,
    CardContent,
    Divider,
    Badge,
    Icon,
    Tooltip,
    Typography,
    LinearProgress,
    Checkbox,
    Link,
    FormGroup,
    FormControlLabel
} from '@mui/material';
import StyledMain from '../StyledMain';
import { ClockCircleOutlined, PlusCircleOutlined, TwitterOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';
import { status, latestMessages } from 'store/data/KanBanInitData';
import MaterialTable from 'material-table';

const DataView = () => {
    const [todoList, setTodoList] = useState({ 'check-your-email': true, 'make-youtube-video': true, 'create-banner': true });

    const isChecked = useCallback((name) => Boolean(todoList[name]), [todoList]);

    const onChange = (e) => (name) => {
        setTodoList({
            ...todoList,
            [name]: e.target.checked
        });
    };

    return (
        <StyledMain>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card variant="outlined">
                        <CardHeader
                            title={<Typography variant="subtitle1">To do list</Typography>}
                            action={
                                <Tooltip title="add task">
                                    <IconButton color="primary">
                                        <PlusCircleOutlined />
                                    </IconButton>
                                </Tooltip>
                            }
                        ></CardHeader>
                        <Divider />
                        <CardContent>
                            <FormGroup>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    name="check-your-email"
                                                    checked={isChecked('check-your-email')}
                                                    onChange={(e) => onChange(e)('check-your-email')}
                                                    sx={{
                                                        '&.Mui-checked + span': { textDecoration: 'line-through' }
                                                    }}
                                                />
                                            }
                                            label="Check your email"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    name="make-youtube-video"
                                                    checked={isChecked('make-youtube-video')}
                                                    onChange={(e) => onChange(e)('make-youtube-video')}
                                                    sx={{
                                                        '&.Mui-checked + span': { textDecoration: 'line-through' }
                                                    }}
                                                />
                                            }
                                            label="Make YouTube Video"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    name="create-banner"
                                                    checked={isChecked('create-banner')}
                                                    onChange={(e) => onChange(e)('create-banner')}
                                                    sx={{
                                                        '&.Mui-checked + span': { textDecoration: 'line-through' }
                                                    }}
                                                />
                                            }
                                            label="Create Banner"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    name="upload-project"
                                                    checked={isChecked('upload-project')}
                                                    onChange={(e) => onChange(e)('upload-project')}
                                                    sx={{
                                                        '&.Mui-checked + span': { textDecoration: 'line-through' }
                                                    }}
                                                />
                                            }
                                            label="Upload Project"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    name="update-task"
                                                    checked={isChecked('update-task')}
                                                    onChange={(e) => onChange(e)('update-task')}
                                                    sx={{
                                                        '&.Mui-checked + span': { textDecoration: 'line-through' }
                                                    }}
                                                />
                                            }
                                            label="Update Task"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    name="task-issue"
                                                    checked={isChecked('task-issue')}
                                                    onChange={(e) => onChange(e)('task-issue')}
                                                    sx={{
                                                        '&.Mui-checked + span': { textDecoration: 'line-through' }
                                                    }}
                                                />
                                            }
                                            label="Task Issue"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    size="small"
                                                    name="display-project"
                                                    checked={isChecked('display-project')}
                                                    onChange={(e) => onChange(e)('display-project')}
                                                    sx={{
                                                        '&.Mui-checked + span': { textDecoration: 'line-through' }
                                                    }}
                                                />
                                            }
                                            label="Display Project"
                                        />
                                    </Grid>
                                </Grid>
                            </FormGroup>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card variant="outlined">
                        <CardHeader
                            title={<Typography variant="subtitle1">Traffic Sources</Typography>}
                            subheader={<Typography variant="caption">You're getting more and more sources, keep it up!</Typography>}
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={'32px'}>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Refferal</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">20%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="primary" value={20}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Bounce</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">58%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="secondary" value={58}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Internet</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">40%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="primary" value={40}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Social</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">90%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="primary" value={90}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <Card variant="outlined">
                        <CardHeader
                            title={<Typography variant="subtitle1">Team members</Typography>}
                            action={
                                <Link to="#" underline="hover">
                                    View all
                                </Link>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={'32px'}>
                                {status.map((st) => (
                                    <Grid item key={st.id} xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Avatar src={st.avatar} />
                                            </Grid>
                                            <Grid item zeroMinWidth xs>
                                                <Typography variant="subtitle1">{st.name}</Typography>
                                                <Typography color="secondary" variant="caption">
                                                    {st.position}
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="caption">{st.lastlog}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={7} lg={6}>
                    <Card variant="outlined">
                        <CardHeader
                            title={<Typography variant="subtitle1">Latest Messages</Typography>}
                            action={
                                <Link to="#" underline="hover">
                                    View all
                                </Link>
                            }
                        />
                        <Divider />
                        <CardContent sx={{ position: 'relative' }}>
                            <Grid
                                container
                                spacing={3}
                                sx={{
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: '8px',
                                        left: '110px',
                                        width: '2px',
                                        height: '100%',
                                        background: 'rgb(235, 235, 235)',
                                        zIndex: 1
                                    }
                                }}
                            >
                                {latestMessages.map((msg) => (
                                    <Grid item xs={12} key={msg.id}>
                                        <Grid container spacing={1}>
                                            <Grid item sx={{ width: '120px' }}>
                                                <Grid container flex flexDirection="row" spacing={4} alignItems="center">
                                                    <Grid item zeroMinWidth xs>
                                                        <Typography variant="caption" align="left" color="secondary">
                                                            {msg.time}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item sx={{ marginLeft: '-56px', zIndex: 101 }}>
                                                        {msg.avatar}
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item zeroMinWidth xs>
                                                <Grid container spacing={1} paddingLeft={'8px'}>
                                                    <Grid item display="flex" flexDirection="column">
                                                        <Typography variant="subtitile1">{msg.title}</Typography>
                                                        <Typography variant="caption" color="secondary">
                                                            {msg.description}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={5} lg={6}>
                    <Card variant="outlined">
                        <CardHeader
                            title={<Typography variant="subtitle1">User Activities</Typography>}
                            subheader={
                                <Typography color="secondary" variant="caption">
                                    You're getting more and more sources, keep it up!
                                </Typography>
                            }
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={'32px'}>
                                <Grid item xs={12}>
                                    <Grid container spacing={3}>
                                        {['now', '2 min ago', '1 day ago', '3 week ago'].map((time, index) => (
                                            <Grid item xs={12} key={index}>
                                                <Grid container spacing={3}>
                                                    <Grid item>
                                                        <Badge
                                                            variant="dot"
                                                            color={
                                                                ['primary', 'warning', 'error', 'success'][
                                                                    Math.floor((Math.random() * 4) % 4)
                                                                ]
                                                            }
                                                            sx={{
                                                                '& .MuiBadge-badge': {
                                                                    bottom: '14%',
                                                                    right: '14%'
                                                                }
                                                            }}
                                                            anchorOrigin={{
                                                                vertical: 'bottom',
                                                                horizontal: 'right'
                                                            }}
                                                        >
                                                            <Avatar src={status[Math.floor((Math.random() * 4) % 4)].avatar}></Avatar>
                                                        </Badge>
                                                    </Grid>
                                                    <Grid item zeroMinWidth xs>
                                                        <Typography variant="subtitle1">John Doe</Typography>
                                                        <Typography color="secondary" variant="caption">
                                                            Lorem Ipsum is simply dummy text.
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item display="flex" gap="5px" alignItems="center">
                                                        <Typography color="secondary" variant="caption">
                                                            {time}
                                                        </Typography>
                                                        <ClockCircleOutlined
                                                            style={{
                                                                fontSize: '0.675rem'
                                                            }}
                                                        />
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                        <CardHeader title={<Typography variant="subtitle1">Projects</Typography>} action={<Link to="#">View all</Link>} />
                        <Divider />
                        <CardContent></CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card variant="outlined">
                        <CardHeader
                            title={<Typography variant="subtitle1">Traffic Sources</Typography>}
                            subheader={<Typography variant="caption">You're getting more and more sources, keep it up!</Typography>}
                        />
                        <Divider />
                        <CardContent>
                            <Grid container spacing={'32px'}>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Refferal</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">20%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="primary" value={20}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Bounce</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">58%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="secondary" value={58}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Internet</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">40%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="primary" value={40}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid item zeroMinWidth sm variant="body2">
                                                    <Typography variant="body2">Social</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="body2">90%</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <LinearProgress variant="determinate" color="primary" value={90}></LinearProgress>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </StyledMain>
    );
};

export default DataView;
