import nc from 'next-connect'
import comments from '../../../src/data/data'

const handler = nc()
  .post((req, res) => {
    const comment = {
      ...req.body,
      id: comments.length + 1
    }
    comments.push(comment)
    res.json({data: comment})
  })
  .get((req, res) => {
    res.json({data: comments})

  })


export default handler