import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';

export interface CardContent extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    firstName?: string;
    phone?: string;
    email?: string;
    state?: string;
    country?: string;
}

export const CardLoader: React.FunctionComponent<CardContent | any> = (props) => {
    const { firstName, phone, email, state, country } = props;
    return (
        <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Username<br></br>
                                <p>{firstName}</p>
                            </Typography>
                            <Typography variant="h5" component="div">
                                Phone Number<br></br>
                                <p>{phone}</p>
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Email ID<br></br>
                                <p>{email}</p>
                            </Typography>
                            <Typography variant="body2">
                                Country<br></br>
                                <p>{country}</p>
                            </Typography>
                            <Typography variant="body2">
                                States<br></br>
                                <p>{state}</p>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Edit User</Button>
                            <Button size="small">Delete User</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
