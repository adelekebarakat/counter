
import './App.css';
import { Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillLevel from './component/skillLevel';
import Card from './component/Card';

const App = () => { 
  const [show, setShow] = useState(false)

  const handleToggleShow = () => {
    setShow(!show)

  }
  return(
    <Fragment>
      <SkillLevel />
    <div className='container mycontainer'>
      <div className='row'>
        <div className='col-md-3'>
          <div className='h1 text-primary'> 4 </div>
          <div className='fs-6'>Days</div>
        </div>
        <div className='col-md-3'>
          <div className='h1 text-primary'> 4 </div>
          <div className='fs-6'>Hours</div>
        </div>
        <div className='col-md-3'>
          <div className='h1 text-primary'> 4 </div>
          <div className='fs-6'>Minutes</div>
        </div>
        <div className='col-md-3'>
          <div className='h1 text-primary'> 4 </div>
          <div className='fs-6'>Seconds</div>
        </div>
      </div>
    </div>
    <Card title="Card 1" 
    imageUrl="Image 1" 
    color="red"
    bgcolor="rgb(34,193,195)"
    toggleTitle= {handleToggleShow} showText= {show}
    />

    <Card title="Card 2" 
    imageUrl="Image 2" 
    color="green"
    bgcolor="rgb(238,174,202)"
    toggleTitle= {handleToggleShow} showText= {show}
    />
    
    <Card title="Card 3" 
    imageUrl="Image 3"
    color ="blue"
    bgcolor="black"
    toggleTitle= {handleToggleShow} showText= {show}/>
    

   
    </Fragment>
   
  )
}
export default App;
