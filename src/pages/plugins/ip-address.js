import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import { OutlinedInput } from '@mui/material';

// 127.0.0.1
const InputIPAddress = (props) => {
    const inputRef = React.createRef(null);

    const checkIpValue = (value) => {
        const subips = value.split('.');
        if (subips.length > 4) {
            return false;
        }

        const invalidSubips = subips.filter((ip) => {
            ip = parseInt(ip);
            return ip < 0 || ip > 255;
        });
        if (invalidSubips.length !== 0) {
            return false;
        }
        let emptyIpCount = 0;
        subips.forEach((ip) => {
            if (ip === '') {
                emptyIpCount++;
            }
        });
        if (emptyIpCount > 1) {
            return false;
        }
        return true;
    };

    const beforeMaskedStateChange = ({ previousState, currentState, nextState }) => {
        let { value, selection } = currentState;
        let oldValue = previousState?.value;
        console.log('[DEBUG]:', currentState, previousState);

        if (value && !/^[\d\.]+$/.test(value)) {
            return previousState;
        }
        let cursorPosition = selection ? selection.start : null;
        let result = checkIpValue(value);
        if (!result) {
            value = value.trim();
            const newValue = value.substring(0, value.length - 1) + '.' + value.substring(value.length - 1);
            if (checkIpValue(newValue)) {
                cursorPosition++;
                selection = { start: cursorPosition, end: cursorPosition };
                value = newValue;
            } else {
                value = oldValue;
            }
        }

        return {
            ...nextState,
            selection,
            value
        };
    };

    return (
        <InputMask
            mask="999999999999999"
            value={props.value}
            onChange={props.onChange}
            alwaysShowMask={false}
            beforeMaskedStateChange={beforeMaskedStateChange}
        >
            {/* <OutlinedInputWithRef ref={inputRef} /> */}
            <OutlinedInput ref={inputRef} />
        </InputMask>
    );
};

export default InputIPAddress;

InputIPAddress.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};
