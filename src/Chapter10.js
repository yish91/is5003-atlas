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


export default function Chapter10(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Strategy
            </Typography>
            <br/>
            <Typography component="p">
                After World War Two, Japanese upstarts required three decades to seize leadership roles in auto making and electronics from industry leaders in the U.S. But Alibaba today has the potential to outstrip companies like eBay and Amazon a decade or so after entering the battle for platform marketplace dominance.
                <br/>
                <br/>
                And, of course, Alibaba’s chief rivals for the crown are other platform companies such as Amazon and eBay. Such is the world of competition that the rise of platforms has brought.
                <br/>
                <br/>
                The implicit assumption in traditional business strategy that competition is a zero-sum game is far less applicable in the world of platforms.
                <br/>
                <br/>
                Rather than re-dividing a pie of more-or-less static size, platform businesses often grow the pie (as, for example, Amazon has done by innovating new models, such as self-publishing and publishing on demand, within the traditional book industry) or create an alternative pie that taps new markets and sources of supply (as Airbnb and Uber have done alongside the traditional hotel and taxi industries).
                <br/>
                <br/>
                Platform strategy resembles traditional strategy much the way three-dimensional chess resembles the traditional game.14 Within the ecosystem, the lead firm negotiates dynamic tradeoffs involving competition at three levels: platform against platform, platform against partner, and partner against partner.
                <br/>
                <br/>
                These new factors help determine who participates in a platform ecosystem, the value they help to create, who controls that value, and ultimately the size of the market.
                <br/>
                <br/>
                Platform managers can build their businesses by, first, giving partners frictionless opportunities to innovate, then capturing some or all of the value created by acquisition or duplication.
                <br/>
                <br/>
                Over the long haul, it is in the interest of platform managers to take control of the major sources of value created by and for users in their ecosystem.
                <br/>
                <br/>
                Data can be a source of enormous value to platform businesses, and well-run firms are using data to shore up their competitive positions in a wide variety of ways.
                <br/>
                <br/>
                Data analytics can thus significantly augment the capabilities of both the platform company and its ecosystem partners, making the platform more successful and greatly increasing its ability to generate value for users.
                Furthermore, based on the fact that platform businesses don’t need to own all the critical assets as long as they have access to them in their ecosystems, platform companies can pursue fewer M & A deals than many traditional firms feel compelled to do.
                <br/>
                <br/>
                Thanks to positive network effects, the value created and the profit margins enjoyed by the company both increase as more users join the ecosystem.21 This is why firms with network effects can enjoy a 10x multiple in value relative to other firms that have comparable revenues but lack network effects. With their current product focus and business models, Houghton Mifflin Harcourt, NBC, Lexis, and Whirlpool do not have strong network effects.
                <br/>
                <br/>
                Because positive network effects attract more users to whichever platform is larger, they are a second force that is likely to strengthen a market’s winner-take-all tendency.
            </Typography>
        </Paper>

    )
}