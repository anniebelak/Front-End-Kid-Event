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

const onCreateSchedule = function (event) {
  event.preventDefault()
  debugger;
  $('#create').show()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.createScheduleSuccess)
    .catch(ui.createScheduleFailure)
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
  $('#create').hide()
  $('.container-fluid').show()
  $('.events-form').on('submit', onCreateSchedule)
}
module.exports = {
  addHandlers
}
