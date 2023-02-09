import React ,{useRef, useLayoutEffect} from 'react'
import Card from 'react-bootstrap/Card';
import {IoMdNotifications} from "react-icons/io";
import{FaSearch} from "react-icons/fa";
import avatar from '../assets/avatar.png';
import Button from 'react-bootstrap/Button';
import { useHistory,useNavigate  } from 'react-router-dom';

import Sidebar from './layout/Sidebar';
function Offre() {
    const offreJob=[
        {
            name:"offre1",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        },{
            name:"offre2",
            description:" Allô réseau Des #opportunités en or chez Astek Canada Voici ma liste de mandats et de postes ouvertes! Pour plus d'informations, n'hésitez pas à me contacter +1 (514) -913-1989 ou 📧 fkechrid@astek-canada.ca"
        },
        {
            name:"offre3",
            description:"Mission proposée par Association Mossendjo Solidarité Informations complémentaires  Nous cherchons des personnes pour accompagner le développement de l'association. Les missions qui seront confiées sont les suivantes : - Recherche de partenariat. - Réponse à des appels à projet. - Aide à la gestion des demandes de subventions.  Compétences et savoir-êtr  Motivation pour l'objet de l'association. - Expérience en recherche de fonds. - Responsabilité - Rigueur. Disponibilité demandée Quelques heures par semaine."
        },
        {
            name:"offre4",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        },
        {
            name:"offre5",
            description:" Allô réseau Des #opportunités en or chez Astek Canada Voici ma liste de mandats et de postes ouvertes! Pour plus d'informations, n'hésitez pas à me contacter +1 (514) -913-1989 ou 📧 fkechrid@astek-canada.ca"
        },
        {
            name:"offre9",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        },
        {
            name:"offre7",
            description:"Mission proposée par Association Mossendjo Solidarité Informations complémentaires  Nous cherchons des personnes pour accompagner le développement de l'association. Les missions qui seront confiées sont les suivantes : - Recherche de partenariat. - Réponse à des appels à projet. - Aide à la gestion des demandes de subventions.  Compétences et savoir-êtr  Motivation pour l'objet de l'association. - Expérience en recherche de fonds. - Responsabilité - Rigueur. Disponibilité demandée Quelques heures par semaine."
        },
        {
            name:"offre8",
            description:" Allô réseau Des #opportunités en or chez Astek Canada Voici ma liste de mandats et de postes ouvertes! Pour plus d'informations, n'hésitez pas à me contacter +1 (514) -913-1989 ou 📧 fkechrid@astek-canada.ca"
        },
        {
            name:"offre9",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        }

    ]
    const navigate = useNavigate();
    navigate('/details')
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
    <Card.Title className='text px-4 form-control'>  <input className='imputsearch' placeholder='search..'
            name="search"
            type="search"
             /> <FaSearch/></Card.Title>
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
        <Button variant="secondary" className='btn2 px-4' type='submit' onClick={()=>navigate('/details')}>Detail</Button>
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

export default Offre