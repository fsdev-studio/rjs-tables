import React, { useState } from 'react';
import './Table.css';


function makeUser(user){

const userArray = Object.values(user);

 const usr = userArray.map((h,i) =>{

  return <td>{h}</td>
})
   return usr
}

function Table ({tableHeader,tableData}){
 const [incrementVal , setIncrementVal] = useState(0)

const header = tableHeader.map((h,i) =><th>{h}</th>);
const data = tableData.map((u,i) =>{
 const usr = makeUser(u);
  return(
    <tr>
      {usr}
    </tr>
  )
}).slice(incrementVal,(incrementVal+10));

return(

    <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
    <table style={{width:'100%'}}>
    <tr>
    {header}
    </tr>
     {data}
  </table>
  <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>

{ (incrementVal +10) > tableData.length  ?<span style={{display:'flex', justifyContent:'center', alignItems:'center',fontSize:30,cursor:'pointer',border:'1px solid black',width:30,height:30,margin:3}} onClick={() =>setIncrementVal((incrementVal-10))}>&#706;</span>: null }

 <span> Showing {incrementVal +1} - {(incrementVal +10) > tableData.length ? tableData.length : (incrementVal +10)} of {tableData.length}</span>

{ (incrementVal +10) < tableData.length ? <span style={{display:'flex', justifyContent:'center', alignItems:'center',fontSize:30,cursor:'pointer',border:'1px solid black',width:30,height:30,margin:3}} onClick={() =>setIncrementVal((incrementVal+10))}>&#707;</span>:  null}

</div>
  </div>

  );
}
//}

export default Table;
