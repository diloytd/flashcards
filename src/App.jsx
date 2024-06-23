import './App.scss';
import Header from './Header/header.jsx';
import Main from './Main/main.jsx';
import Table from './ListTable/table.jsx';
import date from './Date/date.json' 
function App() {
 return (
    <>
      <Header/>
      <Main/>
      <Table date={date}/>
      
    </>
  )
}

export default App
