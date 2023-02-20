Updates of my NBA LIVE SCORING APPLICATION

Student: Elvis Mazimpaka
ID: 300113276
email: emazi081@uottawa.ca

Student: Andy Huang
Id 300117248
chuan110@uottawa.ca


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

###Test Case for csi4103-Pair-project- NBA players Stats website

Test Case#
Test Case Description
Test Data
Expected Result
Actual Result
Pass/Fail
1
Check website work
None
Woking
As expected
pass
2
Check layout and background display 
None
Display
As expected
pass
3
Check response when only player name entered
Trae Young
Display Trae Young current season stats
As expected
pass
4
Check response when both player name and season entered
Trae Young

2019
Display Trae Young 2019 season stats
As expected
pass
5
Check response when enter a player and check a season he didn’t play
Trae Young

2015
Display error message :This player is either injured or hasn't played season 2015
As expected
pass
6
Check response when enter a player doesn’t exist 
Andy Huang
Display error message :This player is either injured or hasn't played season 2022
As expected
pass
7
Check response when enter a player doesn’t exist and season
Andy Huang

1985
Display error message :This player is either injured or hasn't played season 1985
As expected
pass
8
Check response without enter input


Display error message :This player is either injured or hasn't played season 2022
As expected 
pass
9
Check response when enter only first name r
Brown
(many player with first name or last name as Brown)
Display error message :Please specify the name more!
As expected
pass
10
Check response when enter only first name 
Trae
(only Trae Young has Trae in his name)
Display Trae Young current season stats
As expected
pass
11
Check response when enter only last name 
Young
(many player with first name or last name as Young)
Display error message :Please specify the name more!
As expected
pass
12
Check response when enter only last name 
Durant
(only Kevin durant has Durant as his last name)
Display Kevin Durant current season stats
As expected 
pass
13
Check response when enter player from 2003 season 
Yao

2003
Display Yao 
2003 season stats
As expected
pass
14
Check game result page
None
Display today’s schedule 
As expected
pass
15
Check game result page with passed date
2023-Feb-16
Display 2023-02-16 game result
As expected
pass
16
Check game result page with 2018 passed date
2018-Nov-16
Display 2018-11-16 game result
As expected
pass
17
Check game result page with future date
2023-Nov-17
Display 2023-11-17 game result(None since schedule not out)
As expected
pass
18
Check game result page with future date
2023-Mar-06
Display 2023-03-06 game result
As expected
pass
19
Click on autocomplete player name
Kobe Bryant
Display error message :No stats found for the player 'Kobe Bryant' in the season 2022-2023.
As expected
pass
19
Click on autocomplete player name
Jamal Murray
DisplayJamal Murray 2022-2023 season average


As expected
pass
19
Click on autocomplete player name
Dejounte Murray
Display Dejounte Murray 2022-2023 season average
As expected
pass
20
Check top 10 game high stats on selected date
02/07/2023-02/132023

point
Display top 10 point between selected date
As expected
pass
21
Check top 10 game high stats on selected date
12/07/2023-02/132023

assist
Display top 10 point between selected date
Display error message: An error occurred while retrieving the information. 
fail
22
Check top 10 game high stats on selected date
02/07/2022-02/132023

steal
Display top 10 point between selected date
Display error message: An error occurred while retrieving the information. 
fail
23
Check top 10 game high stats on selected date
01/31/2023-02/132023

block
Display top 10 point between selected date
As expected 
pass
24
Click on top 10 stats player name
Player name
Display player average for current season
As expected
pass


