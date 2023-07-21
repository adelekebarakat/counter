
import './App.css';
import { Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  // skillLevel is the variable name
  // setSkillLevel is the function to set variable name

  // const [skillLevel, setSkillLevel] = useState(0)
  // const handleIncreaseVal = () => {
  //   if (skillLevel < 10 ){
  //     setSkillLevel(skillLevel+1)
  //   }
  // }
  // const handleDecreaseVal = () => {
  //   if (skillLevel < 10 ){
  //     setSkillLevel(skillLevel-1)
      
  //   }
  // }
  // const handleReset = () => {
  //   setSkillLevel(0)
  // }
  
  return(
    <Fragment>
     {/* <h6>React Skill (0-10)</h6>
    <h1>{skillLevel}</h1>
    <button onClick={handleIncreaseVal}>Increase</button>
    <button onClick={handleDecreaseVal}>Decrease</button>
    <button onClick={handleReset}>Reset</button> */}
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
    </Fragment>
   
  )
}
export default App;
