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


export default function Chapter9(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Metrics
            </Typography>
            <br/>
            <Typography component="p">
                Platform managers in search of metrics that reveal the true health of their business need to focus on positive network effects and on the platform activities that drive them.
                <br/>
                <br/>
                In specific, platform metrics need to measure the rate of interaction success and the factors that contribute to it.
                In the startup phase, it is critical to have simple measures to guide decision-making around key questions of platform design and launch, including the design of the core interaction; the development of effective tools to pull users, facilitate interactions, and match producers with consumers; the creation of effective systems of curation; and decisions about how open the platform should be to various kinds of participants.
                <br/>
                <br/>
                Platform managers will need to devise metrics that focus on some of the key issues related to monetization, for example: Which user groups are enjoying the greatest value from platform activities?
                <br/>
                <br/>
                Metrics then must sensitively gauge the ongoing engagement of users and the degree to which they continue to discover new ways to create value on the platform.
                <br/>
                <br/>
                The daily interaction percentage can be measured, its trend over time can be observed, and improvements to the platform’s matching system can be developed, tested, and evaluated based on changes in this metric.
                <br/>
                <br/>
                The specific formulas you use to define the metrics for a particular platform business need to be carefully devised to be appropriate for the kind of platform business involved—the nature of the platform, the types of users, the forms of value being created and exchanged, the variety of interactions performed, and so on.
                <br/>
                <br/>
                Amazon Marketplace, for instance, uses this metric, tracking the gross value of interactions processed by the platform as a key indicator of its activity level.
                <br/>
                <br/>
                The metrics that best measure the number and quality of interactions in your ecosystem will change over the life cycle of the platform, and it’s critical to identify points at which these transitions occur.
                <br/>
                <br/>
                Although these are distinct platform types with disparate needs, they all face the challenges of facilitating a core interaction, measuring the drivers of value, and innovating to maintain the platform’s ability to produce significant value for users.
                <br/>
                <br/>
                Since the value of a platform is derived primarily from network effects, platform metrics should ultimately seek to measure the rate of interaction success and the factors that contribute to it.
                <br/>
                <br/>
                During the startup phase, platform companies should concentrate on metrics that track the strength of characteristics that enable core interactions on the platform, including liquidity, matching, and trust.
                <br/>
                <br/>
                During the growth phase, platform companies should focus on metrics that are likely to impact growth and enhanced value creation, such as the relative size of various portions of the user base, the lifetime value of producers and consumers, and the sales conversion rate.
                <br/>
                <br/>
                During the maturity phase, platform companies should focus on metrics that drive innovation by identifying new functionalities that can create value for users, as well as metrics that can identify strategic threats from competitors to which the platform needs to respond.
            </Typography>
        </Paper>

    )
}