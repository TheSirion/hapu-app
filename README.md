# Hapu App 
This webpage was built by me, Matheus Ribeiro, for the React challenge for a job opening as Front-End Developer at Jungle Devs. It's a single landing page built with React and using React-Bootstrap for styling, ESLint for linting, Prettier for formatting, and Netlify for deployment and A/B testing. Click this link to see it live: https://hapu.netlify.app/

## Report And Final Thoughts
I really enjoyed building this landing page. It was both challenging and fun. While I did stumble into some roadblocks along the way, I somehow managed to overcome all (or at least most) of them, and even took the time to add a few "extras". For instance, I wanted it to feel as complete as possible, so I made a new favicon, changed the page title, and added new colors for button states. I also implemented absolute imports because it simplifies importing files and lowers the chance of headaches when something needs to be refactored. Also, it's super cool.

I spent a lot of time making sure the page was not only responsive but also that every component looked great no matter the screen size. It's also (mostly) very accurate to the Figma design. There might still be some small inconsistencies though. That was by far the most challenging part, and not because I can't do it, but because it takes a lot of effort and dedication, and I'm proud of the result.

I admit there are probably *way* too many Bootstrap classes in some components. I meant to refactor and reduce the clutter as much as I could, but unfortunately there wasn't enough time to do it in the depth I wanted to.

For the A/B testing, I used Netlify's solution that's honestly pretty basic and limited (compared to Google's Optimize, for instance). It's still in beta, after all. I chose to use Netlify for A/B testing because that's where the app is hosted, so it was just convenient to do both things in a single platform. Besides, I had some trouble figuring how to install Optimize. I had never done A/B testing before, so I was a little surprised it even was part of the test lol!
It's set up for 50% chance for either variant, and Netlify automatically installs a cookie to make sure they're consistent to the user, so you might want to try in different browsers and devices to check both variants. 

Alternatively, you can simply check these links: 
- Master branch variant: https://master--hapu.netlify.app/
- A/B branch variant: https://a-b--hapu.netlify.app/

## Installing And Running Locally
1. First of all, make sure you have both Git and NodeJS installed in your computer. Git is a version control command line program that we'll use to download the project from GitHub. NodeJS is a JavaScript run-time that comes bundled with npm, a package manager we'll use to install and manage the dependencies Hapu relies on and don't come in the GitHub repository. They're both essential for Hapu to run. 
2. After that, clone this repository by running `git clone https://github.com/TheSirion/hapu-app.git` in the folder you want it to be installed in. Git will create a new folder with all the project's files and folders. 
3. Make sure the file `package.json` is in the root folder (it most like is), and run `npm install`. This command will create a new folder called `node_modules` and install all the dependencies the project needs to run smoothly. 
4. After that, it should be ready to run. Just run `npm start` and, soon enough, you should see a new tab in your web browser with Hapu running in the local server (`localhost:3000`).
  
## Creating The Production Build
The production build is an optimized version of the project that's prepared for deployment and use. The development build comes with several features that assist in development but can be a major performance hog for the app. Create-React-App makes sure to bundle all files in the best way possible so that the final build has the best performance. The production build is minified, meaning its size is much smaller than the development build, and the code is automatically optimized. 
To create a production build, simply run `npm run build`. Npm will create a new folder called `build` with the production build in it. 
But in order to run the app, you must deploy it somewhere. A few possible options are GitHub Pages, Heroku, Vercel, and Netlify. I chose Netlify, and you can check the deployed version here: https://hapu.netlify.app/

