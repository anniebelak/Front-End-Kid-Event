
'use strict'
const store = require('./store')
const showEventsTemplate = require('./templates/events-listing.handlebars')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  $('#sign-up').hide()
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up!', error)
}

const signInSuccess = function (response) {
  $('#message').text('Signed in successfully')
  store.user = response.user
  $('#sign-in').hide()
  $('#get').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-up').hide()
  $('.table-responsive').hide()
  $('#get').show()
  $('#create').show()
  // $('#password3').hide()
  // $('#password4').hide()
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully')
  store.user = null
  $('#sign-in').show()
  $('#sign-up').show()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  // $('#password3').hide()
  // $('#password4').hide()
  $('#password3').val('')
  $('#password4').val('')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password', error)
}
const createEventSuccess = function (data) {
  console.log('createEvent data', data)
  $('#message').text('Created new event successfully')
}

const createEventFailure = function (error) {
  $('#message').text('Error no new event created', error)
}

const getEventsSuccess = function (data) {
  console.log('geteventssuccessdata is ', data)
  $('#message').text('Here is your schedule!!')
  const showEventsHTML = showEventsTemplate({ events: data.events })
  $('.getEvents').html(showEventsHTML)
}
const getEventsFailure = function () {
  $('#message').text('Get Schedule Failed')
}
const deleteEventSuccess = function () {
  $('#message').text('Event successfully deleted!!')
}
const deleteEvnetFailure = function () {
  $('#message').text('Delete Event Failed')
}

const updateEventSuccess = function (data) {
  console.log('geteventssuccessdata is ', data)
  $('#message').text('Updated successfully!!')
}
const updateEventFailure = function () {
  $('#message').text('Get Update Failed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  createEventFailure,
  createEventSuccess,
  getEventsFailure,
  getEventsSuccess,
  deleteEvnetFailure,
  deleteEventSuccess,
  updateEventFailure,
  updateEventSuccess
}
