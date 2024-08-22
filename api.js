const express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
var data=[{icon:"bi bi-android",title:"android devices",text:"bala bla bala bla bla"},
          {icon:"bi bi-airplane",title:"airplane",text:"bala bla bala bla bla"},
          {icon:"bi bi-apple",title:"apple device ",text:"bala bla bala bla bla"},
          {icon:"bi bi-bank",title:"bank",text:"bala bla bala bla bla"},
]

app.get('/', function (req, res) {
  res.send(data)
})

app.listen(3000)