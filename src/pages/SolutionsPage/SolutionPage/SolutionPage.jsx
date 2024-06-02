import React from 'react'
import { useLocation } from 'react-router-dom'
import { CrudSolucionProvider } from '../../../context/CrudSolucionContext'
import SolutionForm from './Components/SolutionForm'
import { CrudPracticaProvider } from '../../../context/CrudPracticaContext'
import PracticeView from './Components/PracticeView'

export default function SolutionPage () {
  const location = useLocation()
  const { solutionId, practiceId } = location.state || {}

  return (
    <>
      {/* <h1>muestra {solutionId}-{practiceId}</h1> */}
      <CrudPracticaProvider>
        <PracticeView practiceId={practiceId} />
      </CrudPracticaProvider>

      <CrudSolucionProvider>

        <SolutionForm solutionId={solutionId} />
      </CrudSolucionProvider>

    </>

  )
}
