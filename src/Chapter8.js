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


export default function Chapter8(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Governance
            </Typography>
            <br/>
            <Typography component="p">
                As we saw in chapter 2, the new technology-driven communities known as platform businesses are creating a vast amount of new wealth outside the firm, and these external benefits must be designed and managed fairly.
                <br/>
                <br/>
                This makes it difficult for platform managers to ensure that various participants create value for one another, and it makes it likely that conflicts will emerge that governance rules must resolve as fairly and efficiently as possible.
                <br/>
                <br/>
                For this reason, platforms have much to learn from cities and states, which have had thousands of years to evolve principles of good governance.
                <br/>
                <br/>
                Good governance is important in both nation-states and platform businesses because absolutely free markets, in which people and organizations interact with no rules, restrictions, or safeguards, can’t always be relied upon to produce results that are fair and satisfactory to those involved.
                <br/>
                <br/>
                Individuals who benefit from positive externalities aren’t likely to complain about them—but they are considered problems from a business design standpoint, since they reflect value that is not being fully captured by the platform.
                <br/>
                <br/>
                We’ve mentioned some of the serious legal problems faced by platforms earlier: individuals who listed properties on Airbnb had their homes used for brothels and raves; people offering personal services on Craigslist have been murdered.21 Case law does not generally hold platforms accountable for misdeeds of platform users, even though the owners of the platform may be reasonably well positioned to regulate and control the behavior of the users.
                <br/>
                <br/>
                And, as community resources grow, governance should be structured in nested tiers, with certain simple issues controlled by small, local groups of users, and increasingly complex, global problems managed by larger, more formally organized groups.30 Norms that emerge in successful platform communities generally follow the patterns outlined by Ostrom.
                <br/>
                <br/>
                In addition to promoting economic growth, well-designed market mechanisms can incentivize the creation and sharing of intellectual property and reduce the riskiness of interactions on the platform.
                <br/>
                <br/>
                Rather than seeking to minimize their own risk, platforms should use market mechanisms such as risk pooling and insurance to reduce risk for their participants and thereby maximize overall value creation.
                <br/>
                <br/>
                Yet results improve when smart rules of governance are applied to platform companies themselves as well as to platform partners and participants.
                <br/>
                <br/>
                But in the long run, designing fair participation into ecosystem governance prompts users to create more wealth than if the rules grant a platform owner the ability to make arbitrary decisions without accountability.
                Many platform managers choose governance principles that favor themselves over their users.
                <br/>
                <br/>
                When signs of change appear on the horizon—such as new behaviors by platform users, unanticipated conflicts among them, or encroachments by new competitors—information about the change should spread rapidly through the organization, encouraging creative conversations about how the governance system may need to evolve in response.
                <br/>
                <br/>
                The basic tools for platform governance include laws, norms, architecture, and markets.
                <br/>
                <br/>
                Each must be designed and implemented with care in order to encourage platform participants to engage in positive behaviors, incentivize good interactions, and discourage bad interactions.
            </Typography>
        </Paper>

    )
}