Group members : Stuart Molnar, Seokgyu Lim, Cedrick Abenes, Sukhmanpreet
Code structure: 
Follows MVC structure with a model, view, and controller. Index.js deals with routing, views deal with html pages, and controllers send data from the backend to the views.
The controllers are split into a reminder_controller and an auth_controller. The reminder side deals with what is displayed on a users site, while the auth side deals with creating an individual session for a user.

Complete tasks : create note, edit, delete, start date and end date, persistent email on sign-up button, landing page “what are people saying”, navbar active link, navbar hidden links

Incomplete tasks
add friend:
api integration:
cookies and session: once the user registered an account, we generate a session and store it in the cookie. We then create a cookie called username and inside the cookie store the username of the user.
deleting subtasks: get currently active subtask from list, send that number to backend when delete subtask is clicked, remove it from database array at number, then load the frontend page again
Tags: 


Installation:

Download zip file from repo
Extract to a folder
Open folder in command prompt
>npm install
>npm start
