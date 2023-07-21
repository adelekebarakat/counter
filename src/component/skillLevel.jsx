
import './App.css';
import { Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const SkillLevel = () => {

//   skillLevel is the variable name
//   setSkillLevel is the function to set variable name

  const [skillLevel, setSkillLevel] = useState(0)
  const handleIncreaseVal = () => {
    if (skillLevel < 10 ){
      setSkillLevel(skillLevel+1)
    }
  }
  const handleDecreaseVal = () => {
    if (skillLevel < 10 ){
      setSkillLevel(skillLevel-1)
      
    }
  }
  const handleReset = () => {
    setSkillLevel(0)
  }
  
  return(
    <Fragment>
     <h6>React Skill (0-10)</h6>
    <h1>{skillLevel}</h1>
    <button onClick={handleIncreaseVal}>Increase</button>
    <button onClick={handleDecreaseVal}>Decrease</button>
    <button onClick={handleReset}>Reset</button> 
    
    </Fragment>
   
  )
}
export default SkillLevel;
