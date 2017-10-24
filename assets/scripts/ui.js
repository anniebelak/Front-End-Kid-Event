
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
  $('#createNew').show()
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
  $('#get').hide()
  $('#createNew').hide()
  $('.containerHandler').hide()
  $('.table-responsive').hide()
  $('#done').hide()
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out', error)
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
  $('#password3').val('')
  $('#password4').val('')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password', error)
}
const createEventSuccess = function (data) {
  console.log('createEvent data', data)
  $('#message').text('Added new happening successfully')
}

const createEventFailure = function (error) {
  $('#message').text('Error no new happening added', error)
}

const getEventsSuccess = function (data) {
  $('#message').text('Here is what happning and the stuff you need!!')
  const showEventsHTML = showEventsTemplate({ events: data.events })
  $('.getEvents').html(showEventsHTML)
}
const getEventsFailure = function () {
  $('#message').text('Get What Happening  Failed')
}
const deleteEventSuccess = function () {
  $('#message').text('Happening successfully deleted, select GET EVENTS to see updated list!!')
}
const deleteEventFailure = function () {
  $('#message').text('Delete Failed')
}

const updateEventSuccess = function (data) {
  $('#message').text('Edit Successful')
}
const updateEventFailure = function () {
  $('#message').text('Edit Failed')
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
  deleteEventFailure,
  deleteEventSuccess,
  updateEventFailure,
  updateEventSuccess
}
