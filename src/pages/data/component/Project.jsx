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
    FormControlLabel,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TableFooter,
    TableContainer,
    Paper,
    Chip
} from '@mui/material';

import styled from '@emotion/styled';

import { status } from 'store/data/KanBanInitData';

import { StyledTableHeadCell, StyledTableHead } from '../../StyledMain';
import { faker } from '@faker-js/faker';

const Project = () => {
    return (
        <Card variant="outlined">
            <CardHeader title={<Typography variant="subtitle1">Projects</Typography>} action={<Link to="#">View all</Link>} />

            <CardContent
                sx={{
                    '&.MuiCardContent-root': {
                        padding: 'unset'
                    }
                }}
            >
                <TableContainer>
                    <Table aria-label="simple table">
                        <StyledTableHead>
                            <TableRow>
                                <StyledTableHeadCell>Assigned</StyledTableHeadCell>
                                <StyledTableHeadCell>Name</StyledTableHeadCell>
                                <StyledTableHeadCell>Due Date</StyledTableHeadCell>
                                <StyledTableHeadCell>Priority</StyledTableHeadCell>
                            </TableRow>
                        </StyledTableHead>
                        <TableBody>
                            {status.map((st) => (
                                <TableRow color="secondary" key={st.id}>
                                    <TableCell>
                                        <Grid container spacing={2}>
                                            <Grid item>
                                                <Avatar src={faker.image.avatar()} />
                                            </Grid>
                                            <Grid item zeroMinWidth xs>
                                                <Typography variant="h6">{st.username}</Typography>
                                                <Typography variant="caption" color="secondary">
                                                    {st.position}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </TableCell>
                                    <TableCell> {st.name}</TableCell>
                                    <TableCell>{st.due}</TableCell>
                                    <TableCell>
                                        <Chip
                                            variant="filled"
                                            size="small"
                                            color={
                                                st.priority == 'Low'
                                                    ? 'warning'
                                                    : st.priority == 'Lower'
                                                    ? 'error'
                                                    : st.priority == 'Medium'
                                                    ? 'primary'
                                                    : st.priority == 'High'
                                                    ? 'info'
                                                    : 'success'
                                            }
                                            label={st.priority}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

export default Project;
