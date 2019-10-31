import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Introduction from './Introduction';
import Chapter2 from './Chapter2';
import Chapter3 from './Chapter3';
import Chapter4 from './Chapter4';
import Chapter5 from './Chapter5';
import Chapter6 from './Chapter6';
import Chapter7 from './Chapter7';
import Chapter8 from './Chapter8';
import Chapter9 from './Chapter9';
import Chapter10 from './Chapter10';
import Chapter11 from './Chapter11';
import Snackbar from "@material-ui/core/Snackbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        textAlign: 'center'
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Introduction', 'Network Effect', 'Platform Architecture', 'Disruption', 'Launching Successfully', 'Monetization', 'Openness', 'Governance', 'Metrics', 'Strategy', 'Policy'];
}


export default function HorizontalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [nextStepState, setNextStepState] = useState([false, true, true, true]);
    const [summaryInput, setSummaryInput] = useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [feedback, setFeedBack] = useState(undefined);
    const [snackbarMessage, setSnackbarMessage] = useState(<span/>);
    const [loading, setLoading] = useState(<span/>);
    const [isComplete, setIsComplete] = useState(false);
    const toggleSnackbar = () =>{
        setOpenSnackbar(!openSnackbar)
    };

    const handleSummaryChange = e => {
        if (e.target.value.split(' ').length <= 50){
            setSummaryInput(e.target.value)
        } else {
            setOpenSnackbar(true)
            setSnackbarMessage("Your summary has more than 50 words!");
        }
    };

    const steps = getSteps();

    const snackbar = (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            message={snackbarMessage}
            autoHideDuration={3000}
            onClose={toggleSnackbar}
            open={openSnackbar}
            ContentProps={{
                classes: {
                    root: classes.snackbar
                }
            }}
        />
    );

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <Introduction/>;
            case 1:
                return <Chapter2/>;
            case 2:
                return <Chapter3/>;
            case 3:
                return <Chapter4/>;
            case 4:
                return <Chapter5/>;
            case 5:
                return <Chapter6/>;
            case 6:
                return <Chapter7/>;
            case 7:
                return <Chapter8/>;
            case 8:
                return <Chapter9/>;
            case 9:
                return <Chapter10/>;
            case 10:
                return <Chapter11/>;
            default:
                return 'Unknown step';
        }
    }

    function callLambda() {
        const loadLambda = async () => {
            setLoading(<LinearProgress/>)
            //await axios.get('https://9yepncpwy1.execute-api.ap-southeast-1.amazonaws.com/default/PlatformLambda?chapter=' + (activeStep + 1) + '&input=' + summaryInput)
             await axios.post("https://9yepncpwy1.execute-api.ap-southeast-1.amazonaws.com/default/PlatformLambda", {
                    "userToken": "dummy",
                    "editable": {
                        "0": "# Input your summary between the string block. \n# Try to make sure your summary is about 100 words\nsummary = \"\"\"\n" + summaryInput + "\n\"\"\""
                    },
                    "hidden": {
                        "0": "" + (activeStep + 1)
                    },
                    "shown": {
                        "0": "dummyValue"
                    }
                })
                .then(res => {
                    setLoading(<span/>);
                    let isComplete = res.data.isComplete;
                    if (isComplete){
                        let tempArr = nextStepState.slice();
                        tempArr[activeStep] = false
                        setNextStepState(tempArr)
                    }
                    setIsComplete(isComplete)
                    setFeedBack(res.data.textFeedback)

                })
                .catch(err => {
                    setLoading(<span/>)
                    setOpenSnackbar(true)
                    setSnackbarMessage("Error! Please try again!");
                })
        };

        loadLambda()
    }

    const handleNext = () => {
        setIsComplete(false)
        setFeedBack(undefined)
        setSummaryInput("")
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const divStyle = {
        marginLeft: '0.8rem',
        marginRight: '0.8rem'
    };

    return (
        <div className={classes.root}>
            {loading}
            {snackbar}
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div style={divStyle}>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            Congratulations! All steps completed! - you&apos;re finished
                        </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </div>
                ) : (
                    <div>
                        {getStepContent(activeStep)}
                        {activeStep !== 0 ? (
                            <div className={classes.paper}>
                                <Paper>
                                    <Grid>
                                        {feedback === undefined ? <span/> :
                                            <Grid>
                                                <Paper className={classes.paper}>
                                                    {
                                                        isComplete ?
                                                            <Typography variant="h6">
                                                                Successful summarisation!
                                                            </Typography>
                                                            :
                                                            <Typography variant="h6">
                                                                Please try again!
                                                            </Typography>

                                                    }
                                                    <Typography component="p">
                                                        {feedback}
                                                    </Typography>
                                                </Paper>
                                            </Grid>
                                        }
                                        <Typography align="center">
                                            Try and summarize what you have learnt in 50 words or less!
                                        </Typography>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="summarise"
                                            label="Summarise"
                                            name="summarise"
                                            autoFocus
                                            multiline={true}
                                            value={summaryInput}
                                            onChange={handleSummaryChange}
                                        />
                                        <Typography variant="caption" display="block" align="center" gutterBottom>
                                            {summaryInput.length === 0 ? 0 : summaryInput.trim().split(" ").length} / 50 words
                                        </Typography>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                            onClick={() => {
                                                callLambda();

                                            }}
                                        >
                                            Summarise
                                        </Button>
                                    </Grid>
                                </Paper>
                            </div>
                        ) : (<span/>)}
                        <div className={classes.paper}>
                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button>

                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                                className={classes.button}
                                disabled={nextStepState[activeStep]}
                            >
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}