import './App.scss';
import Header from './Header/header.jsx';
import Main from './Main/main.jsx';
import Table from './ListTable/table.jsx';
import date from './Date/date.json' ;
import Card from './Card/card.jsx';


function App() {
  
 return (
    <>
      <Card date={date}/>
      <Header/>
      <Main/>
      <Table date={date}/>
      <Card date={date}/>
 

    </>
  )
}

export default App
