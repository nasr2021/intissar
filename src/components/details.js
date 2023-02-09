import React from 'react'
import Card from 'react-bootstrap/Card';
import {IoMdNotifications} from "react-icons/io";
import{FaSearch} from "react-icons/fa";
import avatar from '../assets/avatar.png';
import Button from 'react-bootstrap/Button';
import { useHistory,useNavigate  } from 'react-router-dom';
function Details() {
    const offreJob=[
        
        {
            name:"offre9",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet ) Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet ) Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Proje Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        }

    ]
    const navigate = useNavigate();

  return (
   
    <div className=''>
    <Card className='hide'>
      <Card.Header > 
      <div className='hid' >
        <div className='pro'>
            
         <img src={avatar} className="imgHed" alt="avatar" />
        <div className='position'>nom de profile</div>
        </div>
        <div className='position'>
            <div className='pro'>
            <span class="badge badge-pill">1</span><IoMdNotifications /></div>
            </div>
      </div>
      </Card.Header>
    </Card>
    <Card className='cards'>
  
      <Card.Body className='text'>
      {offreJob.map((item, index)=>(
      <Card className='pub'>
      
      <Card.Body>
        <div className='pro'>
            
            <img src={avatar} className="imgpub" alt="avatar" />
           <div className='position'>nom de profile</div>
           </div>
           
           <Card.Title className='mx-4'>{item.name}</Card.Title>
        <Card.Text className='mx-4'>
          <div>{item.description}</div>
        </Card.Text>
        <div className='groupbtn'>
        <Button variant="danger" className='btn1' type='submit' onClick={()=>navigate('/quize')}>Demande</Button>
        </div>
      </Card.Body>
      
    </Card>
    
    ))

}
<hr></hr>
      </Card.Body>
    </Card>
 
    </div>
  
  );
}


export default Details