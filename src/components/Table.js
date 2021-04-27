import React, { useState } from 'react';
import './Table.css';


function makeUser(user,tableBodyStyle){

const userArray = Object.values(user);

 const usr = userArray.map((h,i) =>{

  return <td style={tableBodyStyle}>{h}</td>
})
   return usr
}

function Table ({tableStyle,tableContainerStyle,tableHeaderStyle,tableBodyStyle,tableHeader,tableData,pagination}){
 const [incrementVal , setIncrementVal] = useState(0)

const header = tableHeader.map((h,i) =><th style={tableHeaderStyle}>{h}</th>);
const data = tableData.map((u,i) =>{
 const usr = makeUser(u,tableBodyStyle);
  return(
    <tr>
      {usr}
    </tr>
  )
}).slice(incrementVal,(incrementVal+10));

return(

    <div style={tableContainerStyle}>
    <table style={tableStyle}>
    <tr>
    {header}
    </tr>
     {data}
  </table>
  { pagination ?
  <div style={{display:'flex', width:'100%', justifyContent:'center', alignItems:'center'}}>

{ (incrementVal +10) > tableData.length  ?
  <span className="shadow" style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
    cursor:'pointer',
    borderRadius:20,
    width:30,
    height:30,
    margin:3,
    padding:2,
  }}
  onClick={() =>setIncrementVal((incrementVal-10))}>&#706;</span>: null }

 <span style={{margin:10}}> Showing {incrementVal +1} - {(incrementVal +10) > tableData.length ? tableData.length : (incrementVal +10)} of {tableData.length}</span>

{ (incrementVal +10) < tableData.length ?
  <span
  className="shadow" style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
    cursor:'pointer',
    borderRadius:20,
    width:30,
    height:30,
    margin:3,
    padding:2,
  }}
   onClick={() =>setIncrementVal((incrementVal+10))}>&#707;</span>:  null}

</div>
:null
}
  </div>

  );
}
//}

export default Table;
