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


export default function Chapter4(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Disruption
            </Typography>
            <br/>
            <Typography component="p">
                We’ve already looked at the way in which the car-service platform Uber has leveraged network effects to claim a huge and growing share of the rides-for-hire market from such traditional businesses as taxis and limousine services—and in the process has built an enormous corporate valuation in a startlingly short period of time.
                In chapter 11, we’ll return to the question of whether platform businesses like Uber are engaging in unfair competition, or whether traditional incumbent companies are simply angry about being outcompeted by digital interlopers.
                <br/>
                <br/>
                Platforms are leveraging this new capability to create entirely new business models.
                <br/>
                <br/>
                Simultaneously, organizational boundaries are being redefined as platform companies leverage external ecosystems to create value in new ways.
                <br/>
                <br/>
                This phenomenon alone would lead to significant disruption of traditional industries, as platform businesses displace pipeline businesses at the top of the Fortune 500 rankings.
                <br/>
                <br/>
                In particular, every time a platform removes a hurdle that makes the participation of producers more difficult, value creation is reconfigured and new sources of supply are opened up.
                <br/>
                <br/>
                The advent of the world of platforms is also disrupting traditional consumer behavior, inspiring millions of people to use products and services in ways that would have been unimaginable a few years ago.
                <br/>
                <br/>
                The rise of the world of platforms, then, doesn’t simply mean the emergence of new business entities competing with traditional incumbent firms.
                <br/>
                <br/>
                We describe these three forms of platform-driven disruptions as de-linking assets from value, re-intermediation, and market aggregation.
                <br/>
                <br/>
                Intermediation by platform businesses is transforming industries, creating new venues where market participants are connected with greater power and efficiency than ever before.
                <br/>
                <br/>
                Platforms like Yelp, Angie’s List, and TripAdvisor have created an entirely new industry based on certifying the quality of product and service providers—in the process driving some traditional industry certifiers (such as travel guide and consumer magazine publishers) out of business.
                <br/>
                <br/>
                Platforms are also creating new efficiencies by aggregating unorganized markets.
                <br/>
                <br/>
                Platform businesses, then, are disrupting the traditional business landscape in a number of ways—not only by displacing some of the world’s biggest incumbent firms, but also by transforming familiar business processes like value creation and consumer behavior as well as altering the structure of major industries.
                <br/>
                <br/>
                But in reality, Nike is testing an approach that, if successful, will lead to a new form of growth—one pioneered by platform businesses like Apple.
                <br/>
                <br/>
                When multiple products and services connect and interact using data, pipelines can start behaving like platforms, producing new forms of value and encouraging users to engage in more interactions.
                <br/>
                <br/>
                Nike is not the only company taking the first steps in transforming its traditional pipeline business into a platform business.
                <br/>
                <br/>
                The leaders of incumbent companies who understand the new business model can begin building tomorrow’s platforms in a way that not only leverages their existing assets but strengthens and reinforces them.
                <br/>
                <br/>
                Incumbent companies can fight back against platform-driven disruption by studying their own industries through a platform lens and beginning to build their own value.
            </Typography>
        </Paper>

    )
}