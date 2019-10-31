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


export default function Chapter5(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Launching Successfully
            </Typography>
            <br/>
            <Typography component="p">
                PayPal’s user-friendly, almost frictionless system attracted a significant initial base of consumers—though not enough, in itself, to make the platform attractive to the universe of online sellers.
                <br/>
                <br/>
                Rather than pushing PayPal into the consciousness of users through, for example, television commercials, print advertisements, or email blasts, they created incentives that gave the platform itself a pull appeal—including both the ultra-simplicity of PayPal’s service and the payments that rewarded those who delivered new sign-ups.
                <br/>
                <br/>
                The chicken-or-egg problem and the difficulties of attracting a large user base may cause you to wonder: why shouldn’t incumbent companies with huge existing customer bases take over the world of platforms?
                <br/>
                <br/>
                Sometimes you have to start your platform from scratch, which means that finding a way to attract a base of users on both sides of your market is an unavoidable challenge. There are a number of specific, effective strategies that have been developed and demonstrated for overcoming the chicken-or-egg problem.
                <br/>
                <br/>
                The platform managers arrange for the creation of value units that will attract one or more sets of users and demonstrate the potential benefits of participating in the platform. Those initial users create more value units, attract still other users, and set up a positive feedback loop that leads to continuing growth. The Huffington Post followed this strategy by hiring writers to create an initial array of high-quality blog posts for the site, thereby attracting readers.
                <br/>
                <br/>
                To start, the platform creates conditions such that value units can be created that are relevant to users even when the overall size of the network is small.
                <br/>
                <br/>
                Create a business around products or services that benefit a single set of users; later, convert the business into a platform business by attracting a second set of users who want to engage in interactions with the first set.
                As South by Southwest has grown, the number of companies trying to use it as a platform launch vehicle has reached a point where there’s virtually no way to be heard above the roar of the crowd. And there isn’t always a relevant opportunity for an explosion of real-time publicity interest that is capable of attracting thousands of potential users.
                <br/>
                <br/>
                Your goal is to design an ecosystem where senders want to transfer value units through an external network to a large number of recipients, ultimately leading many of those recipients to become users of your platform.
                <br/>
                <br/>
                Thus, the perk for spreading the word about Dropbox is not a cash payment that would only serve to empty the company’s coffers, but rather an opportunity to use Dropbox’s service even more, thereby stimulating further growth and encouraging users to make ever greater use of the Dropbox platform.
                <br/>
                <br/>
                Making it easy for users to create and disseminate spreadable value units helps you build a platform that has high growth as well as high engagement.
                <br/>
                <br/>
                To avoid this result, the managers of startup platforms need to be strategic about identifying the external networks they can use to build their growth and finding creative, value-adding ways to connect with their users.
            </Typography>
        </Paper>

    )
}