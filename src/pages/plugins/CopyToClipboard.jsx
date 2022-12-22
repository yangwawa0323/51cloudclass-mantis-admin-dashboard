import React, { useMemo } from 'react';
import {
    Alert,
    Button,
    Snackbar,
    IconButton,
    Grid,
    Card,
    CardContent,
    CardHeader,
    Typography,
    Divider,
    OutlinedInput
} from '@mui/material';
import { CopyOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyToClip = () => {
    const [value, setValue] = React.useState('https://www.51cloudclass.com');
    const [value2, setValue2] = React.useState('');
    const [copied, setCopied] = React.useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const content = useMemo(() => document.querySelector('#content-copied')?.innerText);

    return (
        <Grid container spacing={{ xs: 3, height: '60vh' }}>
            <Grid item xs={12}>
                <Card variant="outlined">
                    <CardHeader title={<Typography variant="subtitle1">Copy from TextField</Typography>} />
                    <Divider />
                    <CardContent>
                        <Typography>Enter Website</Typography>

                        <OutlinedInput
                            fullWidth
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            endAdornment={
                                <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
                                    <IconButton>
                                        <CopyOutlined />
                                    </IconButton>
                                </CopyToClipboard>
                            }
                        />
                        <Snackbar
                            open={copied}
                            autoHideDuration={3000}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center'
                            }}
                            onClose={() => setCopied(false)}
                        >
                            <Alert variant="filled" severity="success" sx={{ color: 'white', width: '100%' }}>
                                Copied to clipboard!
                            </Alert>
                        </Snackbar>
                    </CardContent>
                </Card>
                <Divider />
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader title={<Typography variant="subtitle1">Copy from TextArea</Typography>} />
                    <Divider />
                    <CardContent>
                        <Typography>Enter Text to Copy</Typography>
                        <OutlinedInput
                            value={value2}
                            fullWidth
                            multiline
                            placeholder="Copy text"
                            rows={3}
                            onChange={(e) => setValue2(e.target.value)}
                        />
                        <CopyToClipboard text={value2} onCopy={() => setCopied(true)}>
                            <Button
                                startIcon={<CopyOutlined style={{ fontSize: '0.725rem' }} />}
                                variant="contained"
                                sx={{ margin: '12px' }}
                                size="small"
                            >
                                Copy
                            </Button>
                        </CopyToClipboard>

                        <CopyToClipboard
                            text={value2}
                            onCopy={() => {
                                setValue2('');
                                setCopied(true);
                            }}
                        >
                            <Button
                                startIcon={<CopyOutlined style={{ fontSize: '0.725rem' }} />}
                                variant="contained"
                                color="error"
                                sx={{ margin: '12px' }}
                                size="small"
                            >
                                Cut
                            </Button>
                        </CopyToClipboard>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader
                        action={
                            <CopyToClipboard text={content} onCopy={() => setCopied(true)}>
                                <IconButton color="primary" size="large" sx={{ padding: '12px', marginRight: '24px' }}>
                                    <CopyOutlined />
                                </IconButton>
                            </CopyToClipboard>
                        }
                        title={<Typography variant="subtitle1">Copy from Container</Typography>}
                    />
                    <Divider />
                    <CardContent>
                        <Typography variant="body1" id="content-copied">
                            Lorem ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis.
                            Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é
                            amistosis quis leo. Manduma pindureta quium dia nois paga.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default CopyToClip;
