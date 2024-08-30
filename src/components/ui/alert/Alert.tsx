import { ReactNode } from "react";
import "./index.scss" ;
import { X } from 'lucide-react';


interface IProps {
  type : string ,
  title : string ,
  icon: ReactNode,
  descripton: string


}

const Alert = ({type = "alert-danger" , title , icon ,descripton} : IProps) => {
  return (
    
    <div className={type}>
    
      <div className="alert-header">
          <div className="alert-title">
            {icon} 
            <h4>{title}</h4>
          </div>

            <X size={25} className="close"/>
      </div>

      <p>{descripton}</p>
    </div>
  ); 
};


export default Alert