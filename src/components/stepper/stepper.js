import React , {useEffect, useRef, useState} from 'react'
import StepNavigation from '../stepper/formulair';
import Card from 'react-bootstrap/Card';
import Header from '../layout/hedr';
import { useNavigate  } from 'react-router-dom';
import { Quiz } from '@mui/icons-material';
import { StepperContext } from '../stepper/formulair';

export default function Stepper(){

  const navigate = useNavigate();
  const displayStep=(step)=>{
    switch (step){
      case 1:
        return(<div  >
                
          <div class="mb-3 mt-12 ">
          
              <input type="email" className='form-control' placeholder="nom de l'entreprise" name="email"/>
          </div>
          <div class="mb-3 mt-12">

              <input type="password" className="form-control" placeholder="nom de l'offre" name="password"/>
          </div>
          </div>);
        case 2:
          return(
                  
            
                  <div >
                    <div class="mb-3 mt-12">
                    
                        <input type="text" className="form-control" placeholder=" domaine de l'offre"
                                oninput="this.className = ''" name="first-name"/>
                    </div>
                    <div class="mb-3 mt-12">
                        <input type="text" className="form-control" placeholder=" Address"
                                oninput="this.className = ''" name="last-name"/>
                    </div>
                    </div>);
            case 3:
              return( <div >
                <div class="mb-3 mt-12">
        
                    <input type="tel" className="form-control" placeholder=" petite d'escription"
                            oninput="this.className = ''" name="phone number"/>
                </div>
                <div class="mb-3 mt-12">

                    {/* <input type="text" className="form-control " placeholder="description détaillée" oninput="this.className = ''"
                            name="address"/> */}
                            <textarea id="story" name="story" className="form-control " placeholder="description détaillée"
          rows="5" cols="33"></textarea>
                </div>
                </div>);
                case 4:
                  return <Quiz/>;
                
                  
    }
  }
  const labelArray = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']
  const [currentStep, updateCurrentStep] = useState(1);
 
  const handleChange = input => e => {
    this.setState({ [input]: e.target.currentStep });
  }
  function updateStep(step) {
    updateCurrentStep(step);
  }

 
    return(
    <>
    <Header/>
     <Card className='cards '> 


    <div className="App">
      <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
      <div className='borderformul'>

      <form class="upe-mutistep-form " id="Upemultistepsform" action="" >
        {/* <div  >
                
                    <div class="mb-3 mt-12 ">
                    
                        <input type="email" className='form-control' placeholder="nom de l'entreprise" name="email"/>
                    </div>
                    <div class="mb-3 mt-12">

                        <input type="password" className="form-control" placeholder="nom de l'offre" name="password"/>
                    </div>
                    </div>
        
                 
        
                <div >
                    <div class="mb-3 mt-12">
                    
                        <input type="text" className="form-control" placeholder=" domaine de l'offre"
                                oninput="this.className = ''" name="first-name"/>
                    </div>
                    <div class="mb-3 mt-12">
                        <input type="text" className="form-control" placeholder=" Address"
                                oninput="this.className = ''" name="last-name"/>
                    </div>
                    </div>
       
                <div >
                    <div class="mb-3 mt-12">
            
                        <input type="tel" className="form-control" placeholder=" petite d'escription"
                                oninput="this.className = ''" name="phone number"/>
                    </div>
                    <div class="mb-3 mt-12">

                        <input type="text" className="form-control " placeholder="description détaillée" oninput="this.className = ''"
                                name="address"/>
                    </div>
                    </div>

         */}
             <StepperContext.Provider value={{}}>
              {displayStep(currentStep)}</StepperContext.Provider>  
                
                    
                
               
            </form>


      </div>

     
      
      <button className="btn2" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}> Previous Step</button>
      <button className="btn2" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep+1)}>Next Step</button>
  
      <button className="btn1" disabled={currentStep < 5 }    onClick={()=>{navigate('/offre')}}>finall</button>
    </div>
    </Card> 
   </>
    ); 
}
  