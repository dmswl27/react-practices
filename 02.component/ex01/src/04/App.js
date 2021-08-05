import React from 'react';
import MyConponent from './MyConponent';

export default function (){       
    return (
        <div id='App'>         
            <MyConponent 
               /* props01={'문자'} : Not Required Default Value Set*/
               props02={1} 
               props03 = {true}
               props04 = { { no:2 } }
               props05 = {[1,2,3,4,5]}
               props06 = { () => {'🎈'}}
               props07={ 100 }
               props08={ [true, false, true] }
               props09={ {no:1, name:'둘리', email:'dooly@gmail.com'} } />
               
        </div>
    )
       
}
