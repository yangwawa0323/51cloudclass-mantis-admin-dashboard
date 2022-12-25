import * as React from 'react';
import styled from '@emotion/styled';
import { Grid, TableCell, TableHead, Typography } from '@mui/material';
import { LoremIpsum, Avatar as LoremAvatar } from 'react-lorem-ipsum';

const StyledMain = styled.div((prop) => ({
    padding: '10px 20px 40px 20px',
    marginBottom: '40px',
    minHeight: '780px',
    height: '80vh'
}));

export const StyledGridItem = styled(Grid)`
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledTableHeadCell = styled(TableCell)`
    padding-top: 0px;
    padding-bottom: 0px;
    text-transform: uppercase;
`;

export const StyledTableBodyCell = styled(TableCell)`
    padding-top: 0px;
    padding-bottom: 0px;
    '& > p': {
        margin: unset;
    }
`;

export const StyledTableHead = styled(TableHead)`
    background-color: rgb(250, 250, 250);
    height: 50px;
    border-top: 2px solid rgb(240, 240, 240);
    border-bottom: 2px solid rgb(240, 240, 240);
`;

export const StyledLoremAvatar = styled(LoremAvatar)`
    width: 48px;
    height: 48pxl;
`;

const StyledLorem = styled(LoremIpsum)`
    '& > p' : {
        padding: 0px;
        margin: 0px;
    }
`;

export const StyledTypography = styled(Typography)`
    & svg {
        width: 36px;
        height: 36px;
        opacity: 0.5;
        transition: all 0.3s ease-in-out 0s;
    }

    &:hover svg {
        width: 38px;
        height: 38px;
        opacity: 1;
    }
`;

export const StyledLoremIpsum = (props, children) => {
    const { words } = props;
    return (
        <StyledLorem avgWordsPerSentence={words} avgSentencesPerParagraph={0} startWithLoremIpsum={false}>
            {children}
        </StyledLorem>
    );
};

export default StyledMain;
