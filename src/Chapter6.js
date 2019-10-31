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


export default function Chapter6(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Monetization
            </Typography>
            <br/>
            <Typography component="p">
                In fact, rather than charging users to join the platform, the founders should be subsidizing their participation—perhaps by providing tools and services to make it easy, fast, and effective for them to complete their profiles.
                <br/>
                <br/>
                As this example illustrates, platform businesses that intend to use free pricing as part of their strategy need to ensure that the value they create and hope to ultimately monetize is fully controlled by the platform.
                <br/>
                <br/>
                But rather than putting the technology in the hands of customers in exchange for a fee, they invite users to join the platform—and then they seek to monetize the platform by charging for the value that the platform technology creates for those users.
                <br/>
                <br/>
                In some cases, the ability to monetize a platform may actually increase dramatically when the number of users declines—reflecting the power of negative network effects to impact the value of a platform.
                <br/>
                <br/>
                Meetup tested charging fees to political organizations, which were a growing portion of the platform’s user base, but this, too, produced only modest revenue.
                <br/>
                <br/>
                Platforms that facilitate such monetary transactions can monetize the value created by charging a transaction fee, which may be calculated as either a percentage of the transaction price or a fixed fee per transaction.
                <br/>
                <br/>
                Charging a transaction fee is a powerful way of monetizing the value created by the platform without hampering the growth of network effects.
                <br/>
                <br/>
                In some cases, it’s possible to monetize a platform by charging producers for access to a community of users who have joined the platform not in order to interact with producers but for other, unrelated reasons.
                <br/>
                <br/>
                Charging third-party producers for community access is effective if and only if the newly added contents—such as the job listings on Dribbble—enhance the value of the platform to its users.
                <br/>
                <br/>
                Platforms that charge producers fees for better targeted messages, more attractive presentations, or interactions with particularly valuable users are using enhanced access as a monetization technique.
                <br/>
                <br/>
                To this day, Alibaba charges no transaction fees, having managed to monetize the platform through advertising—as if a company that facilitated transactions, like Amazon and eBay, were to generate its profits by selling ads like Google.
                <br/>
                <br/>
                Or, in a variant that we heard from the executive in charge of platform strategy for Haier Group, a Chinese manufacturing company, “You never take first money.” In other words, only after a value unit has been created and exchanged with results that are satisfactory to both the producer and the consumer should the platform business itself seek to capture a share of that value.
                <br/>
                <br/>
                If platform managers hope to monetize by charging for access to their user base, the platform should be designed to control the avenues through which content reaches the users as well as the flow of data about users.
                <br/>
                <br/>
                Techniques for monetizing a platform include charging a transaction fee, charging users for enhanced access, charging third-party producers for access to a community, and charging a subscription fee for enhanced curation.
            </Typography>
        </Paper>

    )
}