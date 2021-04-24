import React, { useState } from 'react';
import './Table.css';

function makeUser(user) {
  const userArray = Object.values(user);
  const usr = userArray.map((h, i) => {
    return /*#__PURE__*/React.createElement("td", null, h);
  });
  return usr;
}

function Table({
  tableHeader,
  tableData
}) {
  const [incrementVal, setIncrementVal] = useState(0);
  const header = tableHeader.map((h, i) => /*#__PURE__*/React.createElement("th", null, h));
  const data = tableData.map((u, i) => {
    const usr = makeUser(u);
    return /*#__PURE__*/React.createElement("tr", null, usr);
  }).slice(incrementVal, incrementVal + 10);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("tr", null, header), data), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, incrementVal + 10 > tableData.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      cursor: 'pointer',
      border: '1px solid black',
      width: 30,
      height: 30,
      margin: 3
    },
    onClick: () => setIncrementVal(incrementVal - 10)
  }, "\u02C2") : null, /*#__PURE__*/React.createElement("span", null, " Showing ", incrementVal + 1, " - ", incrementVal + 10 > tableData.length ? tableData.length : incrementVal + 10, " of ", tableData.length), incrementVal + 10 < tableData.length ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 30,
      cursor: 'pointer',
      border: '1px solid black',
      width: 30,
      height: 30,
      margin: 3
    },
    onClick: () => setIncrementVal(incrementVal + 10)
  }, "\u02C3") : null));
} //}


export default Table;