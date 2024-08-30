import { BellRing } from "lucide-react";
import Alert from "./components/ui/alert/Alert";

const App = () => {
  return (
   <div>
    <Alert title="Alert Type" 
     type="alert-danger" 
     icon = {<BellRing />} 
     descripton="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut omnis non aliquam itaque nemo aut vel tempore doloribus sint consectetur esse maxime, quidem laudantium vero, repellendus numquam ab exercitationem?"
     />
   </div>
  )
}

export default App ;
