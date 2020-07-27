const getTableData = (req, res, db) => {
  db.select('*').from('wshop.vw_custosdeprodutos')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: `db error: ${err}`}))
}


const getSearchpath = (req, res, db) => {
  db.select('*').from('wshop.vw_custosdeprodutos')
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: `db error: ${err}`}))
}

const getView = (req, res, db) => {
  db.select('*').from("pg_views pv WHERE  pv.viewname like '%vw_custosdeprodutos%'")
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: `db error: ${err}`}))
}

// const postTableData = (req, res, db) => {
//   const { first, last, email, phone, location, hobby } = req.body
//   const added = new Date()
//   db('testtable1').insert({first, last, email, phone, location, hobby, added})
//     .returning('*')
//     .then(item => {
//       res.json(item)
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

// const putTableData = (req, res, db) => {
//   const { id, first, last, email, phone, location, hobby } = req.body
//   db('testtable1').where({id}).update({first, last, email, phone, location, hobby})
//     .returning('*')
//     .then(item => {
//       res.json(item)
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

// const deleteTableData = (req, res, db) => {
//   const { id } = req.body
//   db('testtable1').where({id}).del()
//     .then(() => {
//       res.json({delete: 'true'})
//     })
//     .catch(err => res.status(400).json({dbError: 'db error'}))
// }

module.exports = {
  getTableData,
  getView,
  // postTableData,
  // putTableData,
  // deleteTableData
}