# Instructions 

Please read entire README for details

Navigate to glo-takehome directory

cd glo

npm i

Start the dev server

npm run dev

Go to http://localhost:3000/

# Auth Token

In order to utilize the getAccessToken helper function from apiRequests.js I first needed to provide the proper Url, ClientCID, and Client Secret to the API. For security purposes these strings were added to the key.config instead of inserting them directly into apiRequests.js. I was able to use the api keys locally by importing the file. However, I added key.config to the gitignore to ensure that others couldn't gain access to these api keys.

# Teacher data

After getting the auth token I was able to utilize the getTeacher helper function to obtain the necessary teacher data.

# Classes data 

With the teacher data I was then able to get the classes the corresponded to that specific teacher and group into the categories of Vinyasa Flow, Meditation and Hatha. This was done by identifying the number id which corresponded to each style of yoga.

# Rendering data with hbs

In order to render the desired API data it was necessary to JSON.stringify the object data to display for the client. The data variables then needed to be added to the teacher.hbs file within the appropriate html tags. Since I was not supposed to use the app.js file I did not register a helper function to stringify/format the teacher or classes data. Another approach to help render more neatly for the client would be to iterate through the yoga data in the hbs file with the built-in "each" helper. 

# Bonus

The way the app is currently setup we're making an access token request every time we send a request. The more efficient way to handle the accessToken would be to save it in the top of the file as a global variable so that we always have access and don't need to continually make this request.
