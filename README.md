# Fable-Farm
Group Project two: A site that allows users to write a short story together by submitting and voting on short segments in order to progress the story.


The project incorporates Firebase Authentication, and Cookie Parser allows us to extract the User ID on each page.  We use express api routes to move data to and from the DOM and SQL database.  The project is deployed to Heroku:
[FarmFable](https://tranquil-citadel-46854.herokuapp.com/fables.html)



login: edison@edison.com
Password: edison

![Login](/public/css/assets/login.png)
Firebase captures users information when they sign up and assign a UID.  The UID is then captured in a cookie, and can be extracted to compare to our database UID's to render user specific data.

![Firebase Authentication](/public/css/assets/firebase.png)


The Homepage has a side navbar, and displays the most recent 10 stories.
![Index](/public/css/assets/index.png)

The user that creates the story is meant to have editorial control of the story.  Other users are meant to contribute to the story.  The creator then selects "fragments" to build the story.

![Story](/public/css/assets/fullstory.png)

Some elements of this project are in development.