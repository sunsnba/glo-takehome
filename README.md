# Instructions 

Please read entire README for details

Navigate to glo-takehome directory

cd glo

npm i

Start the dev server

npm run dev

Go to http://localhost:3000/

#Auth Token

In order to utilize the getAccessToken helper function from apiRequests.js I first needed to provide the proper Url, ClientCID, and Client Secret to the API. For security purposes these strings were added to the key.config - by adding this file to the gitignore there was no concern of others gaining access to the information, but I could still access the file locally to request the access token.

#Teacher data

After getting the auth token I was able to utilize the getTeacher helper function to obtain the necessary teacher data.

#Classes data 

With the teacher data I was then able to get the classes the corresponded to that specific teacher and group into the categories of Vinyasa Flow, Meditation and Hatha. This was done by identifying the number id which corresponded to each style of yoga.

#Rendering data with hbs

In order to render the desired API data it was necessary to JSON.stringify the object data to display for the client. The data variables then needed to be added to the teacher.hbs file within the appropriate html tags.

#Bonus

The way the app is currently setup we're making an access token request every time we send a request. The more efficient way to handle the accessToken would be to save it in the top of the file as a global variable so that we always have access and don't need to continually make this request.
