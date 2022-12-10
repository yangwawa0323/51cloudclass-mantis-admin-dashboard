/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// material-ui
import { ButtonBase } from '@mui/material';

// project import
// import Logo from './Logo';
import Logo from 'assets/images/logo.png';
import config from 'config';
import styled from '@emotion/styled';

// ==============================|| MAIN LOGO ||============================== //

const StyledLogo = styled.img((prop) => ({
    width: '6rem',
    height: '6rem',
    borderRadius: '5%'
}));

const LogoSection = ({ sx, to }) => (
    <ButtonBase disableRipple component={Link} to={!to ? config.defaultPath : to} sx={sx}>
        <StyledLogo src={Logo} />
    </ButtonBase>
);

LogoSection.propTypes = {
    sx: PropTypes.object,
    to: PropTypes.string
};

export default LogoSection;
