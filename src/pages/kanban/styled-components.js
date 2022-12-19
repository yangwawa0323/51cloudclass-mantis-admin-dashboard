import styled from '@emotion/styled';
import { OutlinedInput, Button } from '@mui/material';

export const OutlinedInputWithoutBorder = styled(OutlinedInput)((props) => ({
    '& fieldset': {
        border: 'none'
    }
}));

export const StyledCard = styled.div`
    min-width: 250px;
    border: 1px solid rgb(240, 240, 240);
    border-raduis: 4px;
    user-select: none;
    margin: 0px 16px 0px 0px;
    height: 100%;
    background-color: rgb(245, 245, 245);
    flex: 1;
    justify-content: center;
    align-items: center;
    max-width: 280px;
`;

export const StyledTask = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    margin: 16px;
    padding: 16px;
`;

export const AddNewButton = styled(Button)`
    color: rgb(140, 140, 140);
    border-color: rgb(140, 140, 140);
    background-color: rgb(245, 245, 245);
    border: 1px dashed rgb(24, 144, 255);
    width: calc(80% - 16px);
    align-self: center;
`;
