# About
rjs-tables is a table solution for react web apps.


## Getting Started

Install the pacakage :

NPM:
```javascript
npm i rjs-tables
```
Yarn:
```javascript
yarn add rjs-tables
```
## Import in your project
```javascript
import Table from 'rjs-tables/Table'
```
## Use in your project
```javascript
<Table
     tableHeader={header}
     tableData={data}
     />
```

## Props
Props | Details | Example
-------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------
tableHeader | takes an array of strings | javascript```["Item1","Item2","Item3"]```
tableData |  takes an array of object, each object will map to a row in the table |  javascript```{"Item1":"This item 1","Item2":"This item 2","Item3":"This item 3"}```
pagination |  shows pagination, takes an boolean value | javascript```true or false```
tableContainerStyle |  style object for container |  javascript```{display:'flex',flexDirection:'column',width:'100%',justifyContent:'center',alignItems:'center',margin:10,color:'magenta'}```
tableStyle |  style object for table | javascript```{width:300,margin:10,border:'2px solid orange'}```
tableHeaderStyle | style object for table header | javascript```{color:'red',border:'3px solid magenta',background:'lightpink'}```
tableBodyStyle |  style object for table body | javascript```{color:'green',border:'3px solid blue',background:'lightblue'}```

https://frontend.fsdev.studio- Examples

[Demo](https://frontend.fsdev.studio)
