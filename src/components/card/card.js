import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useMachine } from '@xstate/react';
import { counterMachine } from '../../state-machines/counter-machine.js';
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    button: {
        margin: '0 10px'
    },
    topMargin: {
        margin: "20px 0 0 0",
    }
});

export default function SimpleCard() {
    const classes = useStyles();
    const [state, send] = useMachine(counterMachine);

    return (
        <Card className={classes.card}>
            <CardContent>
                <Grid container justify="center">
                    <Grid item>
                        <Typography variant="h6" component="h1">The count is now: {state.context.count}</Typography>
                    </Grid>
                    <Grid item className={classes.topMargin}>
                        <Button className={classes.button} variant="contained" color="primary" onClick={() => send("INCREMENT")}>+1</Button>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={() => send("DECREMENT")}>-1</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}