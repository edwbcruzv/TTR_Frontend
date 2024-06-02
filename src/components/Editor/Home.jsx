import Header from './Header'
import Code from './Code'
import Result from './Result'
import './App.css'
import DataProvide from '../../context/DataProvide'
function Home () {
  return (
    <>
      {/* <Header/> */}
      <DataProvide>
        <Code />
        <Result />
      </DataProvide>

    </>
  )
}

export default Home
