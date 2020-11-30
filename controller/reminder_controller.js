let database = require("../database");

let remindersController = {
  list: (req, res) => {
    res.render('reminder/index', {
      reminders: database["cindy@cindy.com"].reminders
    })
  },

  new: (req, res) => {
    res.render('reminder/create')
  },

  listOne: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database["cindy@cindy.com"].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render('reminder/single-reminder', {
        reminderItem: searchResult
      })
    } else {
      res.render('reminder/index', {
        reminders: database["cindy@cindy.com"].reminders
      })
    }
  },

  create: (req, res) => {
    let reminder = {
      id: database["cindy@cindy.com"].reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
      start_date: req.body.start_date,
      end_date: req.body.end_date
    }
    database["cindy@cindy.com"].reminders.push(reminder);
    res.redirect('/reminders');
  },

  edit: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database["cindy@cindy.com"].reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    res.render('reminder/edit', {
      reminderItem: searchResult
    })

  },

  update: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = database["cindy@cindy.com"].reminders.find(function (reminder) {
      if (reminder.id == reminderToFind) {
        reminder.title = req.body.title,
          reminder.description = req.body.description,
          reminder.completed = req.body.completed == "true",
          reminder.start_date = req.body.start_date,
          reminder.end_date = req.body.end_date
      }
    });
    res.redirect('/reminder/' + reminderToFind)
  },

  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = database["cindy@cindy.com"].reminders.findIndex(function (reminder) {
      return reminder.id == reminderToFind;
    })
    database["cindy@cindy.com"].reminders.splice(reminderIndex, 1);
    res.redirect('/reminders');
  }
}

module.exports = remindersController;