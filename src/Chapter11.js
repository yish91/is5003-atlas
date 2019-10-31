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


export default function Chapter11(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Policy
            </Typography>
            <br/>
            <Typography component="p">
                The emergence of the world of platforms is giving rise to an increasingly important social challenge: the need to design balanced internal governance systems and external regulatory regimes to ensure they operate fairly. As platforms such as Airbnb, Uber, Upwork, RelayRides, and many more play a growing role in the economy and in the social and political spheres, issues about the rights of participants as well as the impact of platform businesses on other sectors and on society as a whole are becoming increasingly salient.
                <br/>
                <br/>
                Today, some of the regulatory battles about platform businesses reflect, in part, efforts by traditional industries to use government regulation as shields against the competitive models that platforms introduce.
                <br/>
                <br/>
                This is data-driven marketing in action, and the sale of the underlying personal information about consumers is a significant source of income for many platform businesses.
                <br/>
                <br/>
                The readiness with which consumers publicly expose information about themselves through platforms suggests that few citizens care passionately about the issue of data privacy—which makes it unlikely that either regulators or platform managers will rein in the use of personal data any time soon.
                <br/>
                <br/>
                In a world where data is widely described as “the new oil,” it’s clear that the issue of data ownership will need to be resolved through some combination of regulatory action, court rulings, and industry self-regulation. Each new scandal involving the release of sensitive information, such as the 2014 disclosure that Sony Pictures had leaked access to the viewing history of millions of users, is likely to increase the push to establish ownership rights over user data. Such ownership rights would give victims a legal course of action after data breaches occur; the theory is that, given high enough liability, firms will take data security more seriously and act to prevent future leaks. In some niche markets, agreements over data ownership are already being developed.
                <br/>
                <br/>
                Perhaps equally significant, the reputation of online labor platforms has already taken a serious hit in the unofficial “court of public opinion”—as reflected, for example, in more than a million Google results, many from respectable mainstream media outlets, in response to the query “Internet sweatshop.” In the long run, public disapproval of business behavior can have a meaningful impact on the value of a company’s brand—which means that the court of public opinion operates, at times, as an unofficial regulatory body that business leaders are wise to heed.
                <br/>
                <br/>
                Grossman imagines a city government responding to the arrival of Uber by passing an ordinance that states: “Anyone offering for-hire vehicle services may opt out of existing regulations as long as they implement mobile dispatch, e-hailing, and e-payments, 360-degree peer-review of drivers and passengers, and provide an open data API for public auditing of system performance with regards to equity, access, performance, and safety.”
                These include access to platforms, compatibility, fair pricing, data privacy and security, national control of information assets, tax policy, and labor regulation.
            </Typography>
        </Paper>

    )
}