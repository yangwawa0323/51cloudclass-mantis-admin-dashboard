/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React from 'react';
import {
    Card,
    Box,
    CardContent,
    Typography,
    InputLabel,
    IconButton,
    Grid,
    Badge,
    Avatar,
    TextField,
    Divider,
    Input,
    InputAdornment,
    FormControl,
    Popover,
    useMediaQuery
} from '@mui/material';
import {
    InfoCircleOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MoreOutlined,
    PhoneOutlined,
    VideoCameraOutlined,
    CheckCircleFilled,
    EditOutlined,
    PaperClipOutlined,
    PictureOutlined,
    SmileOutlined,
    SoundOutlined,
    SendOutlined
} from '@ant-design/icons';
import SimpleBarScroll from 'components/third-party/SimpleBar';
import { flexEnd, flexStart } from '../../StyledMain';

import { faker } from '@faker-js/faker';
import { useMemo, useState, useRef } from 'react';
import { useCallback } from 'react';
import { grey, yellow } from '@mui/material/colors';

import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { debounce } from '../../../utils/tools';

const ChatDetail = (props) => {
    const inputRef = useRef(null);

    const { onClick, status } = props;
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [value, setValue] = useState('');

    const [anchorEl, setAnchorEl] = React.useState(null);

    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const handleChange = debounce((event) => {
        setValue(event.target.value);
        console.log('[DEBUG] input text: ', event.target.value);
    }, 400);

    const handleSmileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const onEmojiClick = (emojiObject, event) => {
        console.log('[DEBUG]:', event, emojiObject);
        setChosenEmoji(emojiObject);
        inputRef.current.value = `${value + emojiObject.emoji}`;
        setValue(`${value + emojiObject.emoji}`);
        setAnchorEl(null);
    };

    // console.log('[DEBUG]: chat record:', chatRecord);

    const currentUserAvatar = useMemo(() => <Avatar src={faker.image.avatar()} />, []);
    const senderAvatar = useMemo(() => <Avatar src={faker.image.avatar()} />, []);

    const randomReply = () => (
        <Grid container sx={{ ...flexEnd, gap: '12px' }}>
            <Grid item xs={2} xl={4}></Grid>
            <Grid item xs={10} xl={8} sx={{ ...flexEnd, gap: '12px' }}>
                <Grid container>
                    <Grid item xs={12} sx={{ ...flexEnd }}>
                        <IconButton>
                            <MoreOutlined />
                        </IconButton>
                        <IconButton>
                            <EditOutlined />
                        </IconButton>
                        <Card variant="outlined" sx={{ color: 'white', bgcolor: 'rgb(24, 144, 255)' }}>
                            <CardContent
                                sx={{
                                    p: '8px',
                                    '&:last-child': {
                                        p: '8px'
                                    }
                                }}
                            >
                                <Grid container>
                                    <Grid item>
                                        <Typography>{faker.word.interjection() + ',' + faker.lorem.sentence(7)}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sx={{ ...flexEnd, gap: '12px' }}>
                        <Typography variant="subtitle2" color="secondary">
                            {faker.date.past(6).toDateString()}
                        </Typography>
                    </Grid>
                </Grid>
                <Badge>{currentUserAvatar}</Badge>
            </Grid>
        </Grid>
    );

    const randomSender = () => (
        <Grid container sx={{ ...flexStart, flexDirection: 'row', gap: '12px' }}>
            <Grid item ml={3}>
                <Badge>{senderAvatar}</Badge>
            </Grid>
            <Grid item xs={10} xl={8} sx={{ ...flexStart, gap: '12px' }}>
                <Grid container pl={{ xs: '24px', md: '8px' }}>
                    <Grid item xs={12} sx={{ ...flexStart }}>
                        <Card variant="outlined" color="secondary">
                            <CardContent
                                sx={{
                                    p: '8px',
                                    '&:last-child': {
                                        p: '8px'
                                    }
                                }}
                            >
                                <Grid container>
                                    <Grid item>
                                        <Typography>{faker.word.interjection() + ',' + faker.lorem.sentence(7)}</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sx={{ ...flexStart, gap: '12px' }}>
                        <Typography variant="subtitle2" color="secondary">
                            {faker.date.past(6).toDateString()}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

    const generatedMessage = useMemo(() => {
        const total = faker.datatype.number(20, 40);
        return Array.from(Array(total).keys()).map((_, index) => (
            <Grid item xs={12} key={index}>
                {faker.datatype.number() % 2 == 1 ? randomReply() : randomSender()}
            </Grid>
        ));
    }, []);

    return (
        <Card variant="outlined" sx={{ position: 'relative', border: 'unset', width: status ? '100%' : 'calc(100% + 320px)', pt: '24px' }}>
            <Grid
                container
                spacing={1}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                alignContent="stretch"
                wrap="wrap"
            >
                <Grid item xs={12}>
                    <Grid container display="flex" justifyContent="space-between">
                        <Grid item display="flex" flexDirection="row">
                            <IconButton
                                disableFocusRipple
                                size="large"
                                style={{ marginRight: 'auto' }}
                                color="secondary"
                                aria-label="filterButton"
                                onClick={onClick}
                            >
                                {status ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                            </IconButton>

                            <Badge sx={{ paddingLeft: '20px' }}>
                                {senderAvatar}
                                <Badge
                                    badgeContent=" "
                                    sx={{ color: 'rgb(82, 196, 26)', top: '20%', right: '20%', height: '16px', padding: '4px' }}
                                >
                                    <CheckCircleFilled />
                                </Badge>
                            </Badge>
                            <Box>
                                <Typography variant="subtitle1">Alene</Typography>
                                <Typography variant="caption" color="secondary">
                                    Active
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item gap={1} display="flex">
                            <IconButton size="large">
                                <PhoneOutlined />
                            </IconButton>
                            <IconButton size="large">
                                <VideoCameraOutlined />
                            </IconButton>
                            <IconButton size="large">
                                <InfoCircleOutlined />
                            </IconButton>
                            <IconButton size="large">
                                <MoreOutlined />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ mt: '20px' }}>
                        <Grid container spacing={2.5}>
                            <SimpleBarScroll
                                style={{
                                    maxHeight: matchDownSM ? 'calc(64vh - 100px)' : 580
                                }}
                            >
                                <Box sx={{ pr: '24px', pl: '8px' }}>{generatedMessage}</Box>
                            </SimpleBarScroll>
                            <Divider />
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            <Box sx={{ px: '24px', bottom: 0, position: 'absolute', width: '100%' }}>
                <Box>
                    <Popover
                        sx={{ marginBottom: '20px' }}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left'
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left'
                        }}
                    >
                        <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} native />
                    </Popover>
                </Box>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <Input inputRef={inputRef} placeholder="Your message" onChange={handleChange} multiline minRows={4} />
                </FormControl>
                <Box sx={{ ...flexStart, justifyContent: 'space-between' }}>
                    <Box>
                        <IconButton sx={{ color: grey[400] }}>
                            <PaperClipOutlined />
                        </IconButton>
                        <IconButton sx={{ color: grey[400] }}>
                            <PictureOutlined />
                        </IconButton>
                        <IconButton sx={{ color: yellow[800] }} onClick={handleSmileClick}>
                            <SmileOutlined style={{ pointerEvents: 'none' }} />
                        </IconButton>
                        <IconButton sx={{ color: grey[400] }}>
                            <SoundOutlined />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton size="large" color="primary">
                            <SendOutlined />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </Card>
    );
};

export default ChatDetail;
