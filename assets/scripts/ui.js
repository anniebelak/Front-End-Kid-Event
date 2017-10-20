'use strict'
const store = require('./store')

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
  $('.table-responsive').show()
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
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
