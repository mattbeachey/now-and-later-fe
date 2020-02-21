# Now and Later

Do you learn a lot from youtube? Ever find a valuable tidbit 30 minutes into a two hour video? Now and Later allows you to easily save the exact part of a video you want to return to with a click (after you’ve installed the Chrome plugin). If you’d like, you can add more information—maybe give the section a title, or jot down a few notes, or tag your saved section for easy searching later.

Once you’ve saved a video section, it will show up in the web app alongside all of your other saved sections. Search by title or filter by tags for easy organizing. Add notes to a video section if you like. Delete a video section once you no longer need it. 

Live link: https://now-and-later.netlify.com/

## Chrome Extension

This app works with a corresponding Google Chrome extension. The extension pulls data from Youtube videos and sends it to the web app for storage. 


## Screenshots / Gifs in action
The gif below shows how a user can add a video at a specific timestamp. If not already logged in, the user will be prompted to log in or create an account, after which the saved video and user data will be added to the user's account.
![Demonstration GIF](./assets/now-and-later-1.GIF)


## Technology Used
The front end of the web app is a single-page React app. The backend is a Node-Express server using Mongoose to connect to a MongoDB database and Passport Authentication. The plugin is a Google Chrome extension. 
Back end repo: https://github.com/mattbeachey/now-and-later-be
Chrome Extension repo: https://github.com/mattbeachey/now-later-chrome-extension

## Installation
Users can download the Now and Later Chrome extension from the chrome store and install it right in their browser. From there, after saving their first video they will be prompted to create an account or sign in. (official Chrom Extension coming in March 2020)

## Challenges
Developing a Chrome extension presented an interesting set of challenges. First, setting up authentication within an extension itself is a rather complicated process, and ultimately I opted to leave the extension itself merely a method to pass the desired information to an authenticated source, without requiring the user to log into the extension. I solved this by sending the users data (the youtube timestamp as well as user-added title, notes, and tags) to a designated "add" page on the web app through query paramaters. These query paramaters have to be parsed and pushed through several re-directs to assure that they will persist if the user has not yet logged in or registered for the app. 

Once the query params have succesfully met their final destination after a user is succesfully logged in, they are automatically sent to an Express-Node backend with a Mongo database. 
