import React from 'react'
import PropTypes from 'prop-types'
import FormLogin from '../../components/forms/FormLogin'
import { URI_BACKEND } from '../../utils/urls'

const LoginStundentPage = props => {
  return (
    <div>
      <FormLogin uri={URI_BACKEND('auth/login')} title='Admins' />
    </div>
  )
}

LoginStundentPage.propTypes = {}

export default LoginStundentPage