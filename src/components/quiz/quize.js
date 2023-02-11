import { Stepper } from '@material-ui/core';
import React, { useState,useEffect,useRef } from 'react';

import Ajouter from '../offre_emploi/ajouter';
import AjouterOffre from '../modals/ajoutermodal';
import Dashbord from '../Dashboard/Dashbord';
import { TiTick } from "react-icons/ti";
import Header from '../layout/hedr';
import Card from 'react-bootstrap/Card';
function Quize( ) {
  const steps = ["Customer Info", "Shipping Info", "Payment", "Step 4"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <Header/>
      <Card className='cards'>
  
      
      </Card>
    </>
  );
};

export default Quize