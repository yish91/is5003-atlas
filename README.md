# Platform Revolution Review - Frontend Deployment Steps

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Ignore

Ignore 

### `backend.zip` 

This is for the backend deployment.

## Serving static pages

Run 

### `yarn build` 

to build the static files.

Next [follow the steps here to build your own github page](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)

## Change backend source
Change the 

### `axios post` 

to point to your new custom backend. This is in `Line 122` in `HorizontalLinealStepper.js`.

## Available Scripts to run locally

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


# Platform Revolution Review - Backend Deployment

## To modify the Lambda function

If you extract `backend.zip`, you will find the various dependencies in the zip file.

The main lambda handler is in 

### `main.py`

To modify the function, edit the lambda handler function in `main.py`, and rezip it into `backend.zip` to redeploy it.

## Deploying it step by step

Please take note that you need an AWS account for this. We will be using `S3` and `Lambda`.

[We also have a video here](https://youtu.be/KKiJEgm78cI)

<ol>
<li>Extract out backend.zip</li>
<li>Log into AWS</li>
<li>Create bucket in S3</li>
<li>Upload backend.zip into S3 bucket</li>
<li>Create a new Lambda</li>
<li>Choose Python 3.7 for Lambda</li>
<li>Choose upload file using S3</li>
<li>Copy and paste the link gotten from uploading backend.zip</li>
<li>Change handler to: main.lambda_handler. This is because our file is called main.py</li>
<li>Add environment variable - Key: NLTK_DATA Value: ./nltk_data</li>
<li>Go to basic settings and set timeout to 1min 30 seconds</li>
<li>Add API Gateway</li>
<li>Save</li>
</ol>

## Change frontend source

Change the 

### `Location`

in the GET handler response header to point to your new custom frontend. 
This is in `Line 124` of `main.py` in `backend.zip`.

Rezip `main.py` back into `backend.zip` and reupload and save the lambda.
