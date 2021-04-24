# About
rjs-tables is a table solution for react web apps.


## Getting Started

Install the pacakage : npm i rjs-tables or yarn add rjs-tables

## Include in your project
```javascript
import Table from 'rjs-tables/rjs-table/Table'
```

```javascript
<Table
     tableHeader={header}
     tableData={data}
     />
```

## Props
Props | Details
-------------------- | --------------------------------------------------------------------------------------------------------------------------------------------
tableHeader | takes an array of strings:```["Item1","Item2","Item3"]```
tableData |  takes an array of object, each object will map to a row in the table : ```{"Item1":"This item 1","Item2":"This item 2","Item3":"This item 3"}```



https://frontend.fsdev.studio- Examples

[Demo](https://frontend.fsdev.studio)
