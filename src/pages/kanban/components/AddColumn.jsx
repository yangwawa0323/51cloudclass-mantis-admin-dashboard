import { Card, CardContent, Grid } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddNewButton, StyledCard } from './StyledComponents';

const AddColumn = (props) => {
    const dispatch = useDispatch();

    const [adding, setAdding] = useState(false);
    const [value, setValue] = useState('');
    const handleAddCard = () => {
        setAdding(true);
    };

    const dispatchNewCard = () => {
        dispatch(newCard({ title: value }));
        setAdding(false);
        setValue('');
    };
    return (
        <StyledCard style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '10px 0px' }}>
            {/* adding show add new button */}
            {(adding && (
                <Card sx={{ width: 'calc(100% - 34px)' }}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <OutlinedInputWithoutBorder
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    fullWidth
                                    placeholder="Add card"
                                />
                            </Grid>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={7} display="flex" alignItems="center">
                                <IconButton color="error" onClick={() => setAdding(false)}>
                                    <CloseOutlined />
                                </IconButton>
                                <Button
                                    onClick={dispatchNewCard}
                                    variant="contained"
                                    sx={{ height: '28px', marginRight: '6px' }}
                                    color="primary"
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            )) || <AddNewButton onClick={handleAddCard}>Add Card</AddNewButton>}
        </StyledCard>
    );
};

export default AddColumn;
