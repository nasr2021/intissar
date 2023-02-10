import React ,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import {IoMdNotifications} from "react-icons/io";
import{FaSearch} from "react-icons/fa";
import avatar from '../assets/avatar.png';
import Button from 'react-bootstrap/Button';
import { useNavigate  } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import MydModalWithGrid from './modals/ajoutermodal';


function Offre() {
    const offreJob=[
        {
            name:"info",
            ville:"paris",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        },{
            name:"gestion",
            ville:"USA",
            description:" Allô réseau Des #opportunités en or chez Astek Canada Voici ma liste de mandats et de postes ouvertes! Pour plus d'informations, n'hésitez pas à me contacter +1 (514) -913-1989 ou 📧 fkechrid@astek-canada.ca"
        },
        {
            name:"info",
            ville:"tunisie",
            description:"Mission proposée par Association Mossendjo Solidarité Informations complémentaires  Nous cherchons des personnes pour accompagner le développement de l'association. Les missions qui seront confiées sont les suivantes : - Recherche de partenariat. - Réponse à des appels à projet. - Aide à la gestion des demandes de subventions.  Compétences et savoir-êtr  Motivation pour l'objet de l'association. - Expérience en recherche de fonds. - Responsabilité - Rigueur. Disponibilité demandée Quelques heures par semaine."
        },
        {
          ville:"suisse",
          name:"droit",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        },
        {
          ville:"belgique",
          name:"eco",
            description:" Allô réseau Des #opportunités en or chez Astek Canada Voici ma liste de mandats et de postes ouvertes! Pour plus d'informations, n'hésitez pas à me contacter +1 (514) -913-1989 ou 📧 fkechrid@astek-canada.ca"
        },
        {
          ville:"argentin",
          name:"info",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        },
        {
          ville:"maroc",
            name:"finance",
            description:"Mission proposée par Association Mossendjo Solidarité Informations complémentaires  Nous cherchons des personnes pour accompagner le développement de l'association. Les missions qui seront confiées sont les suivantes : - Recherche de partenariat. - Réponse à des appels à projet. - Aide à la gestion des demandes de subventions.  Compétences et savoir-êtr  Motivation pour l'objet de l'association. - Expérience en recherche de fonds. - Responsabilité - Rigueur. Disponibilité demandée Quelques heures par semaine."
        },
        {
            name:"gestion",
            ville:"paris",
            description:" Allô réseau Des #opportunités en or chez Astek Canada Voici ma liste de mandats et de postes ouvertes! Pour plus d'informations, n'hésitez pas à me contacter +1 (514) -913-1989 ou 📧 fkechrid@astek-canada.ca"
        },
        {
            name:"eco",
            ville:"paris",
            description:"Bonjour à tous  Nouvelle semaine, nouveaux besoins ! Nous sommes à la recherche d'un PMO/IT junior .Profil Recherché Bac+3 ou Bac + 5 (Gestion de Projet )"
           
        }

    ]
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
  return (
 <>  
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
            <span class="badges badge-pill">1</span><IoMdNotifications /></div>
            </div>
      </div>
      </Card.Header>
    </Card>
   
    <Card className='cards '>
      <div className='filter'>
    <Card.Title className='text px-4 form-control '>  <div className='pro'><input className='imputsearch' placeholder='search..'
            name="search"
            type="search"
             /> <FaSearch/></div>
             
             </Card.Title>
             <div> <button type='submit' className=' ajou' onClick={() => setShow(true)}>Ajouter</button></div></div>
      <Card.Body className='text'>
    
      {offreJob.map((item, index)=>(
  
      <Card className='pub '>
      <Card.Body >
      <div className='pro'>
            <div>
            <img src={avatar} className="imgpub" alt="avatar" />
            
           <div className='position'>nom de profile</div>
           </div>
          <div>
           <Card.Title className=''>
            
            
            {item.name}<Badge  className='secondary px-3 mx-3'>
        New
      </Badge>
            <Badge className='type  px-3'>
        {item.ville}
      </Badge></Card.Title>
      <Card.Text className=''>
          <div className='bold'>nom de l'offre</div>
        </Card.Text>
        <Card.Text className=''>
          <div>{item.description}</div>
        </Card.Text>
        <div className='groupbtn'>
        <Button variant="secondary" className='btn2 px-2' type='submit' onClick={()=>navigate('/details')}>Detail</Button>
        <Button variant="danger" className='btn1' type='submit' onClick={()=>navigate('/quize')}>Demande</Button>
        </div> </div></div>
      </Card.Body>
     
    </Card>
    ))

}  
<hr></hr>
      </Card.Body>
    </Card>
 
    </div>
   

   </>
  );
}

export default Offre