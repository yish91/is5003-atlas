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


export default function Chapter2(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Network Effect
            </Typography>
            <br/>
            <Typography component="p">
                Network effects refers to the impact that the number of users of a platform has on the value created for each user.
                Positive network effects refers to the ability of a large, well-managed platform community to produce significant value for each user of the platform.
                <br/>
                <br/>
                Negative network effects refers to the possibility that the growth in numbers of a poorly-managed platform community can reduce the value produced for each user.
                <br/>
                <br/>
                As we’ll see, positive network effects are the main source of value creation and competitive advantage in a platform business.
                <br/>
                <br/>
                In the twenty-first-century Internet era, comparable monopolies are being created by demand economies of scale (a term used by the two experts largely responsible for popularizing the concept of network effects, Hal Varian, the chief economist at Google, and business professor Carl Shapiro). By contrast with supply economies of scale, demand economies of scale take advantage of technological improvements on the demand side—the other half of the profit equation from the production side.
                <br/>
                <br/>
                They can give the largest company in a platform market a network effect advantage that is extremely difficult for competitors to overcome.
                <br/>
                <br/>
                Demand economies of scale are the fundamental source of positive network effects, and thus the chief drivers of economic value in today’s world.
                <br/>
                <br/>
                David Sacks’s napkin sketch suggests a second dynamic at work in the growth of Uber, one we refer to as a two-sided network effect.5 In Metcalfe’s telephone example, phone users attract more phone users.
                <br/>
                <br/>
                All of these businesses attract two-sided network effects with positive feedback.
                The importance of these effects for stimulating network growth is so great that platform businesses will often spend money to attract participants to one side of the market.
                <br/>
                <br/>
                Virality is about attracting people who are off the platform and enticing them to join it, while network effects are about increasing value among people on-platform.
                <br/>
                <br/>
                We described our findings in a paper that analyzed the mathematics of two-sided network effects. Today, such successful platform businesses as eBay, Uber, Airbnb, Upwork, PayPal, and Google exhibit this model extensively.11
                The growth of a network can produce negative network effects that drive away participants, even leading to the death of a platform business.
                <br/>
                <br/>
                One negative network effect occurs when the growth in numbers that enables more matches between producers and consumers also leads to increasing difficulty, or impossibility, in finding the best match.
                <br/>
                <br/>
                The more complete depiction of Uber’s growth spiral highlights the fact that a firm in a two-sided market must manage all four network effects.
                <br/>
                <br/>
                And network orchestrators develop networks in which people and companies create value together—in effect, platform businesses.
                <br/>
                <br/>
                On average, they enjoy a market multiplier (based on the relationship between a firm’s market valuation and its price-to-earnings ratio) of 8.2, as compared with 4.8 for technology creators, 2.6 for service providers, and 2.0 for asset builders. It’s only a slight simplification to say that that quantitative difference represents the value produced by network effects.
            </Typography>
        </Paper>

    )
}