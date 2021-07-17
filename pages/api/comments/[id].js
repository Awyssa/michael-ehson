import nc from 'next-connect'
import comments from '../../../src/data/data'

const getComment  = (id) => {
  comments.find(id)
}

const handler = nc()
  .get((req, res) => {

    const comment = getComment(req.query.id)

    if(!comment) {
      res.statusCode(404)
      res.json({message: "Woah! This comment does not exist!"})
      res.end()
      return
    }

    res.json({data: comment})
  })
  .patch((req, res) => {
    const comment = getComment(req.query.id)

    if(!comment) {
      res.statusCode(404)
      res.json({message: "Woah! This comment does not exist!"})
      res.end()
      return
    }
    
  })
  .delete((req, res) => {
    const comment = getComment(req.query.id)

    if(!comment) {
      res.statusCode(404)
      res.json({message: "Woah! This comment does not exist!"})
      res.end()
      return
    }
    const i = comments.findIndex(req.query.id)

    comments.splice(i, 1)

    res.json({data: req.query.id})
  })

  export default handler