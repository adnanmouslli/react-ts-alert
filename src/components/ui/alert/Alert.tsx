import { ReactNode } from "react";
import "./index.scss" ;
import { X } from 'lucide-react';
import { alertTypes } from "../../../type";


interface IProps {
  type : alertTypes ,
  title : string ,
  icon: ReactNode,
  descripton?: string ,
  children?: ReactNode ;

}

const Alert = ({type = "alert-default" , title , icon , descripton , children} : IProps) => {
  return (
    
    <div className={type}>
    
      <div className="alert-header">
          <div className="alert-title">
            {icon} 
            <h4>{title}</h4>
          </div>

            <X size={25} className="close"/>
      </div>
      
      {children ? children : <p>{descripton}</p>}
     
    </div>
  ); 
};


export default Alert