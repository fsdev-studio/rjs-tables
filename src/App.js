import logo from './logo.svg';
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
    <div style={{width:500}}>
    <Table
     tableHeader={header}
     tableData={data}
     />
     </div>
  );
}

export default App;
