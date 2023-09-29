import React from 'react'
import PropTypes from 'prop-types'
import FormLogin from '../../components/forms/FormLogin'
import { URI_BACKEND } from '../../utils/urls'

const LoginTeacherPage = props => {
  return (
    <FormLogin uri={URI_BACKEND('auth/login')} title='Profesores' />
  )
}

LoginTeacherPage.propTypes = {}

export default LoginTeacherPage