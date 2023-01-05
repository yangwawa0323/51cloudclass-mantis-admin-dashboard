import React from 'react';

import { Grid, Card, CardHeader, Avatar, CardContent, Divider, Typography, Link } from '@mui/material';

import { status } from '../../../store/data/KanBanInitData';
import { faker } from '@faker-js/faker';

class TeamMember extends React.Component {
    render() {
        return (
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
                        {status.map((st, index) => {
                            if (index >= 4) return;
                            return (
                                <Grid item key={st.id} xs={12}>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Avatar src={faker.image.imageUrl(320, 240, 'man,girl', 'random', true)} />
                                        </Grid>
                                        <Grid item zeroMinWidth xs>
                                            <Typography variant="subtitle1">{faker.name.fullName()}</Typography>
                                            <Typography color="secondary" variant="caption">
                                                {st.position}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="caption">{st.lastlog}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            );
                        })}
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

export default TeamMember;
