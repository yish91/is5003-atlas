import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        textAlign: 'justify'
    },
}));


export default function Chapter7(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Openness
            </Typography>
            <br/>
            <Typography component="p">
                The problems Wikipedia faces in maintaining high quality while maximizing its accessibility to all the users who want to contribute to its content illustrate the challenges inherent in managing an open platform model.
                <br/>
                <br/>
                In this situation, control of the platform, including decisions about openness, rests completely with the manager/sponsor firm.
                <br/>
                <br/>
                In some cases, both the platform manager and the platform sponsor can be either a single company or a group of companies—with further implications for issues of control and openness.
                <br/>
                <br/>
                For example, there are both many sponsors and many managers of the open source Linux operating system, which, like the Mac and iOS systems, serves as a platform connecting app developers and other producers to millions of consumers.
                <br/>
                <br/>
                One of the crucial decisions a platform manager must make—and often reconsider as the market evolves—is the extent to which the platform will be open to extension developers.
                <br/>
                <br/>
                In order to facilitate this extension of its platform’s functionality, Airbnb must open its business to participation by these extension developers.
                <br/>
                <br/>
                This is one of the control points that a platform manager can use to manage open access to its system.
                Some of the first products released under the Guardian’s new open platform model include a Content API, which provides access to over a million articles; a Politics API, which provides election results and candidate information; a Data Store, which provides access to data sets and visualizations, ranging from a table of country-by-country laws and practices regarding the death penalty to a colorful graph depicting all of the time-travel journeys of TV sci-fi hero Doctor Who; and an App Framework, which facilitates app development, aimed at making the system easy to experiment with and build applications for.
                <br/>
                <br/>
                Second, if particular functionality is reinvented by a number of extension developers and gains widespread acceptance by platform users, the manager of the platform should acquire the functionality and make it available through an open API.
                <br/>
                <br/>
                The third kind of openness that platform managers need to control is user participation—in particular, producer openness, which is the right to freely add content to the platform.
                <br/>
                <br/>
                Of course, this stipulation—that the objective is the development of high-quality content—is the reason most platforms reject absolute openness as a strategy for managing user participation.
                <br/>
                <br/>
                Google allowed the development of an open-source version of Android, which is freely available to any manufacturer, while Apple sponsored the proprietary iOS operating system and tightly controlled the hardware so that it is the sole device provider and therefore the sole manager of the system.
                <br/>
                <br/>
                Stories like these illustrate the complicated competitive factors that impact openness decisions—as well as the never-ending balancing act that platform sponsors and managers need to practice to ensure that their platforms remain relevant, vibrant, and valuable to a growing base of users.
                <br/>
                <br/>
                Naturally, a proprietary platform, which is sponsored, managed, and completely controlled by a single company, can only become more open.
            </Typography>
        </Paper>

    )
}