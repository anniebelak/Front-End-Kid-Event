'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
// const store = require('./store')

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  console.log('help')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
  console.log('data is', data)
  $('#email').val('')
  $('#password1').val('')
  $('#password2').val('')
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
  $('#sign-in-val').val('')
  $('#sign-password').val('')
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  $('#password3').val('')
  $('#password4').val('')
}

const onChangePassword = function (event) {
  event.preventDefault()
  $('#password3').show()
  $('#password4').show()

  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const updatePassword = function (event) {
  $('#change-password').show()
}

const onCreateEvent = function (event) {
  event.preventDefault()
  // debugger;
  // $('#create').show()
  const data = getFormFields(this)
  console.log('oncreatevent data is', data)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}
const getEvents = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.getEventsSuccess)
    .catch(ui.getEventsFailure)
}
const onDeleteEvent = function (event) {
  console.log(event)
  const deleteID = $(this).parent().parent().parent().parent().attr('data-id')
  event.preventDefault()
  console.log(deleteID)
  api.deleteEvent(deleteID)
    .then(ui.deleteEventSuccess)
    .catch(ui.deleteEvnetFailure)
}

const onUpdateEvent = function (event) {
  const data = getFormFields(this)
  console.log(event)
  console.log('on update event data is', data.event)
  // const updateID = $(this).parent().attr('data-id')
  event.preventDefault()
  api.updateEvent(data)
    .then(ui.updateEventSuccess)
    .catch(ui.updateEventFailure)
}

const onScheduleDone = function (event) {
  $('.table-responsive').hide()
  $('.form-control').val('')
  $('#get').show()
}

const getNewSchedule = function (event) {
  $('.table-responsive').show()
  $('#get').hide()
  $('#done').show()
  $('.edit-events').hide()
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#passwordShow').on('click', updatePassword)
  $('.table-responsive').hide()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#get').hide()
  $('#done').hide()
  $('#createNew').hide()
  $('.container-fluid').show()
  $('.events-form').on('submit', onCreateEvent)
  $('#get').on('click', getEvents)
  $('.getEvents').on('click', '.delete-events', onDeleteEvent)
  $('#done').on('click', onScheduleDone)
  $('#createNew').on('click', getNewSchedule)
  $('.getEvents').on('submit', '.edit-events', onUpdateEvent)
}
module.exports = {
  addHandlers
}
