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


export default function Chapter3(){
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h3">
                Platform Architecture
            </Typography>
            <br/>
            <Typography component="p">
                A poorly designed platform produces little or no value for users and generates weak network effects, or none at all.
                <br/>
                <br/>
                Other platforms do not facilitate direct connections between users but establish other mechanisms for value exchange.
                <br/>
                <br/>
                Each item exchanged among platform users can be referred to as a value unit.
                <br/>
                <br/>
                Thus, the design of every platform should start with the design of the core interaction that it enables between producers and consumers.
                <br/>
                <br/>
                The core interaction is the single most important form of activity that takes place on a platform—the exchange of value that attracts most users to the platform in the first place.
                <br/>
                <br/>
                These various forms of interaction were built into the platform over time, each designed to meet a particular platform goal and to help users create a new form of value.
                <br/>
                <br/>
                So let’s consider the three key components of the core interaction and how they connect to create value on the platform.
                <br/>
                <br/>
                A filter is an algorithmic, software-based tool used by the platform to enable the exchange of appropriate value units between users.
                <br/>
                <br/>
                Out of millions of value units previously created by producers (such as hotel proprietors and users in search of a mate), the platform employs the filter to select specific units that match the search terms and delivers them to the consumer.
                <br/>
                <br/>
                When designing a platform, your first and most important job is to decide what your core interaction will be, and then to define the participants, the value units, and the filters to make such core interactions possible.
                As we see in cases like LinkedIn and Facebook, platforms often expand over time to embrace many kinds of interactions, each involving different participants, value units, and filters.
                <br/>
                <br/>
                But successful platforms begin with a single core interaction that consistently generates high value for users.
                If the units are relevant and interesting, the user will be drawn to the platform repeatedly, generating a further flow of value units and facilitating more interactions.
                <br/>
                <br/>
                This involves an algorithm built into the platform infrastructure that analyzes user activity, draws conclusions about the user’s interests, preferences, and needs, and recommends new value units and connections that the user is likely to find valuable.
                <br/>
                <br/>
                One aspect of facilitating interactions is making it as easy as possible for producers to create and exchange valuable goods and services via the platform.
                <br/>
                <br/>
                In other cases, platforms must develop intrusive rules for curating value units and other producer-created content in order to encourage desirable interactions and discourage undesirable ones.
                <br/>
                <br/>
                Designing a platform to facilitate value-creating interactions is not a simple matter.
                <br/>
                <br/>
                The more data the platform has to work with—and the better designed the algorithms used to collect, organize, sort, parse, and interpret the data—the more accurate the filters, the more relevant and useful the information exchanged, and the more rewarding the ultimate match between producer and consumer.
                <br/>
                <br/>
                As we’ve seen, adding new features and interactions to a platform can be a powerful way to increase its usefulness and attract more users.
            </Typography>
        </Paper>

    )
}