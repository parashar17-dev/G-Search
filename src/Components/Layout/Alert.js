import React, { useContext } from 'react';
import AlertContext from '../../context/Alert/AlertContext';

const Alert = () => {
   const alertContext = useContext(AlertContext);

   return (
      alertContext.alert !== null && (
         <div className="Alert">
            <i className="fas fa-info-circle"></i>
            {alertContext.alert}
         </div>
      )
   );
};

export default Alert;
