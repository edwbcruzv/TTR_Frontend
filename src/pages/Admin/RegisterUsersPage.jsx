import React from 'react'
import PropTypes from 'prop-types'
import FormRegister from '../../components/forms/FormRegister'
import { URI_BACKEND } from '../../utils/urls'

const RegisterUsersPage = props => {
  return (
    <div>
        <FormRegister uri={URI_BACKEND('admins/register-admin')} title='Registro Admin' />
        <FormRegister uri={URI_BACKEND('auth/registerTeacher')} title='Registro Profesores' />
        <FormRegister uri={URI_BACKEND('auth/registerStudent')} title='Registro Alumnos' />
    </div>
  )
}

RegisterUsersPage.propTypes = {}

export default RegisterUsersPage