export default function ColorRadioButtons({ value, defaultChecked }) {
    const [selectedValue, setSelectedValue] = React.useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === '' ? defaultChecked : selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item }
    });

    return <Radio {...controlProps(value)} />;
}
