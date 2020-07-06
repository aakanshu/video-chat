import React from 'react';
import {Grid, Container, Box, Paper, Typography} from '@material-ui/core';

export default class Home extends React.Component {

    render() {
        return (
            <Box component="div" mt={18}>
                <Container maxWidth="sm">
                    <Grid item p={10}>
                    <Paper elevation={2} variant="outlined" square>
                        <Box component="div" m={5}>
                            <Box display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5">
                                Video Chat Application
                            </Typography>
                            </Box>
                            <br/>
                            <Box component="div" m={2}>
                                <Typography variant="body1">
                                    Available Rooms:
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                    </Grid>
                </Container>
            </Box>
        );
    }
}