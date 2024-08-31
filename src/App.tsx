import { BellRing } from "lucide-react";
import Alert from "./components/ui/alert/Alert";

const App = () => {
  return (
   <div>
    <Alert title="Alert Type" 
     type="alert-default" 
     icon = {<BellRing />} 
     descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut omnis non aliquam itaque nemo aut vel tempore doloribus sint consectetur esse maxime, quidem laudantium vero, repellendus numquam ab exercitationem?"
     />

<Alert title="Alert Type" 
     type="alert-warning" 
     icon = {<BellRing />} 
     descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut omnis non aliquam itaque nemo aut vel tempore doloribus sint consectetur esse maxime, quidem laudantium vero, repellendus numquam ab exercitationem?"
     />

<Alert title="Alert Type" 
     type="alert-error" 
     icon = {<BellRing />} 
     descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut omnis non aliquam itaque nemo aut vel tempore doloribus sint consectetur esse maxime, quidem laudantium vero, repellendus numquam ab exercitationem?"
     />

<Alert title="Alert Type" 
     type="alert-info" 
     icon = {<BellRing />} 
     descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut omnis non aliquam itaque nemo aut vel tempore doloribus sint consectetur esse maxime, quidem laudantium vero, repellendus numquam ab exercitationem?"
     />

<Alert title="Alert Type" 
     type="alert-success" 
     icon = {<BellRing />} 
    //  descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut omnis non aliquam itaque nemo aut vel tempore doloribus sint consectetur esse maxime, quidem laudantium vero, repellendus numquam ab exercitationem?"
     >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut omnis non aliquam itaque nemo aut vel tempore doloribus sint consectetur esse maxime, quidem laudantium vero, repellendus numquam ab exercitationem?
      </p>

     </Alert>

     

  
   </div>
  )
}

export default App ;
