import React from 'react';
import './App.css';
import Table from './components/Table';

const data = [{
    "name":"name",
    "surname":"u.surname",
    "email":"u.email",
   "sex":"u.sex",
   "race":"u.race",
   "nativeLang":"u.nativeLang",
   "secondLang":"u.secondLang",
   "attorneyPrefs":"u.attorneyPrefs"

 },{
     "name":"name twenty",
     "surname":"u.surname",
     "email":"u.email",
    "sex":"u.sex",
    "race":"u.race",
    "nativeLang":"u.nativeLang",
    "secondLang":"u.secondLang",
    "attorneyPrefs":"u.attorneyPrefs"
  },{
      "name":"name twenty",
      "surname":"u.surname",
      "email":"u.email",
     "sex":"u.sex",
     "race":"u.race",
     "nativeLang":"u.nativeLang",
     "secondLang":"u.secondLang",
     "attorneyPrefs":"u.attorneyPrefs"
   },{
       "name":"name twenty",
       "surname":"u.surname",
       "email":"u.email",
      "sex":"u.sex",
      "race":"u.race",
      "nativeLang":"u.nativeLang",
      "secondLang":"u.secondLang",
      "attorneyPrefs":"u.attorneyPrefs"
    },{
        "name":"name twenty",
        "surname":"u.surname",
        "email":"u.email",
       "sex":"u.sex",
       "race":"u.race",
       "nativeLang":"u.nativeLang",
       "secondLang":"u.secondLang",
       "attorneyPrefs":"u.attorneyPrefs"
     },{
         "name":"name twenty",
         "surname":"u.surname",
         "email":"u.email",
        "sex":"u.sex",
        "race":"u.race",
        "nativeLang":"u.nativeLang",
        "secondLang":"u.secondLang",
        "attorneyPrefs":"u.attorneyPrefs"
      },{
          "name":"name twenty",
          "surname":"u.surname",
          "email":"u.email",
         "sex":"u.sex",
         "race":"u.race",
         "nativeLang":"u.nativeLang",
         "secondLang":"u.secondLang",
         "attorneyPrefs":"u.attorneyPrefs"
       },{
           "name":"name twenty",
           "surname":"u.surname",
           "email":"u.email",
          "sex":"u.sex",
          "race":"u.race",
          "nativeLang":"u.nativeLang",
          "secondLang":"u.secondLang",
          "attorneyPrefs":"u.attorneyPrefs"
        },{
            "name":"name twenty",
            "surname":"u.surname",
            "email":"u.email",
           "sex":"u.sex",
           "race":"u.race",
           "nativeLang":"u.nativeLang",
           "secondLang":"u.secondLang",
           "attorneyPrefs":"u.attorneyPrefs"
         },{
             "name":"name twenty",
             "surname":"u.surname",
             "email":"u.email",
            "sex":"u.sex",
            "race":"u.race",
            "nativeLang":"u.nativeLang",
            "secondLang":"u.secondLang",
            "attorneyPrefs":"u.attorneyPrefs"
          },{
              "name":"name twenty",
              "surname":"u.surname",
              "email":"u.email",
             "sex":"u.sex",
             "race":"u.race",
             "nativeLang":"u.nativeLang",
             "secondLang":"u.secondLang",
             "attorneyPrefs":"u.attorneyPrefs"
           },{
               "name":"name twenty",
               "surname":"u.surname",
               "email":"u.email",
              "sex":"u.sex",
              "race":"u.race",
              "nativeLang":"u.nativeLang",
              "secondLang":"u.secondLang",
              "attorneyPrefs":"u.attorneyPrefs"
            },{
                "name":"name twenty",
                "surname":"u.surname",
                "email":"u.email",
               "sex":"u.sex",
               "race":"u.race",
               "nativeLang":"u.nativeLang",
               "secondLang":"u.secondLang",
               "attorneyPrefs":"u.attorneyPrefs"
             },{
                 "name":"name twenty",
                 "surname":"u.surname",
                 "email":"u.email",
                "sex":"u.sex",
                "race":"u.race",
                "nativeLang":"u.nativeLang",
                "secondLang":"u.secondLang",
                "attorneyPrefs":"u.attorneyPrefs"
              },{
                  "name":"name twenty",
                  "surname":"u.surname",
                  "email":"u.email",
                 "sex":"u.sex",
                 "race":"u.race",
                 "nativeLang":"u.nativeLang",
                 "secondLang":"u.secondLang",
                 "attorneyPrefs":"u.attorneyPrefs"
               },{
                   "name":"name twenty",
                   "surname":"u.surname",
                   "email":"u.email",
                  "sex":"u.sex",
                  "race":"u.race",
                  "nativeLang":"u.nativeLang",
                  "secondLang":"u.secondLang",
                  "attorneyPrefs":"u.attorneyPrefs"
                }];


const header = ['Name','Surname',	'Email','Attorney Gender','Attorney Race','Attorney	Native Lang','Attorney Second Lang',	'Attorney Rate'];

function App() {
  return (

    <Table
    tableContainerStyle={{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center',margin:10,color:'magenta'}}
    tableStyle={{width:300,margin:10,border:'2px solid orange'}}
    tableHeaderStyle={{color:'red',border:'3px solid magenta',background:'lightpink'}}
    tableBodyStyle={{color:'green',border:'3px solid blue',background:'lightblue'}}
     tableHeader={header}
     tableData={data}
     pagination={true}
     />

  );
}

export default App;
