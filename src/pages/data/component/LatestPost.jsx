import React from 'react';

import {
    TableContainer,
    Table,
    TableCell,
    Tooltip,
    IconButton,
    Card,
    CardHeader,
    CardContent,
    Grid,
    Typography,
    Link,
    Divider,
    TableRow,
    TableBody,
    Avatar
} from '@mui/material';
import { StyledLoremAvatar } from '../../StyledMain';
import LoremIpsum, { Avatar as LoremAvatar } from 'react-lorem-ipsum';
import { ArrowsAltOutlined } from '@ant-design/icons';

const LatestPost = () => {
    return (
        <Card variant="outlined">
            <CardHeader
                action={<Link to="#">View all</Link>}
                title={<Typography variant="subtitle1">Latest Posts</Typography>}
            ></CardHeader>
            <Divider />
            <CardContent>
                <Grid container spacing={1}>
                    {[0, 1, 2].map((_, index) => (
                        <Grid item key={index} sx={{ width: '100%' }}>
                            <Grid container spacing={1} alignItems="center">
                                <Grid item xs={4}>
                                    <LoremAvatar width={90} height={90} style={{ borderRadius: '6px' }} />
                                </Grid>
                                <Grid item zeroMinWidth xs justifyContent="flex-start">
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            '& > p': {
                                                p: '0px',
                                                m: '0px'
                                            }
                                        }}
                                    >
                                        <LoremIpsum avgWordsPerSentence={4} avgSentencesPerParagraph={0} startWithLoremIpsum={false} />
                                    </Typography>
                                    <Typography
                                        sx={{
                                            '& > p': {
                                                p: '0px',
                                                m: '0px'
                                            }
                                        }}
                                        variant="caption"
                                        color="secondary"
                                    >
                                        Video | 14 minutes ago
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default LatestPost;
