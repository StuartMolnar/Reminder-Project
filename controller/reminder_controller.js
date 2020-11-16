let database = require("../database");

let remindersController = {
  // Show a list of reminders
  list: (req, res) => {
    res.render('reminder/index', {
      reminders: database.cindy.reminders
    })
  },

  // Show a Create Reminder Page
  new: (req, res) => {
    res.render('reminder/create')
  },

  // Show the details of a Single Reminder
  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', {
        reminderItem: searchResult
      })
    } else {
      res.render('reminder/index', {
        reminders: database.cindy.reminders
      })
    }
  },

  // Create a reminder
  // ⚠️ TODO: Currently hardcoded to always create a reminder for Cindy only. You need to make this dynamic. 
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      subtasks: req.body.subtasks.split(',').slice(0, -1)
    }
    console.log(req.body.subtasks.split(',').slice(0, -1));
    database.cindy.reminders.push(reminder);
    res.redirect('/reminders');
  },


  // Show the Edit Reminder Page
  edit: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', {
      reminderItem: searchResult
    })
  },

  // Edit the Reminder
  update: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id;
    database.cindy.reminders.forEach(item => {
      if (item.id == reminderToFind) {
        item.title = req.body.title
        item.description = req.body.description
        item.completed = Boolean(req.body.completed)
      }
      res.redirect('/reminders')
    })
  },

  // Delete the Reminder
  delete: (req, res) => {
    // ⭐️ your implementation here ⭐️
    let reminderToFind = req.params.id; // returns the id of remindern ie http://localhost:3000/reminder/1 **id=1**
    //remove reminder with id of reminderTOFind

    database.cindy.reminders.forEach(element => { // loop through the list of reminders
      const index = database.cindy.reminders.indexOf(element); // returns the index of the reminder from the list

      if (element.id == Number(reminderToFind)){
        database.cindy.reminders.splice(index, 1)
    }
  })
    res.redirect('/reminders');
  }
}

module.exports = remindersController;