import React from 'react'
import PropTypes from 'prop-types'
import FormLogin from '../../components/forms/FormLogin'
import { URI_BACKEND } from '../../utils/urls'


const LoginAdminPage = props => {
  return (
    <div>
      <FormLogin uri={URI_BACKEND('auth/login')} title='Admins' />
    </div>
  )
}

LoginAdminPage.propTypes = {}

export default LoginAdminPage