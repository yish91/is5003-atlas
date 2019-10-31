import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import image from './platform_revolution.jpg';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));


export default function Introduction(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography>
                This is a revision of the book <b><a href={"https://www.amazon.com/Platform-Revolution-Networked-Markets-Transforming/dp/0393249131"}>Platform Revolution</a></b>
            </Typography>
            <Typography>
                <img src={image} alt="pr"/>
            </Typography>
        </div>
    )
}