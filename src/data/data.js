// src/data/data.js
const comments = new Array(5)
  .fill(1)
  .map((_, i) => {
    return {
      id: i,
      comment: `Comment ${i}`
    }
  })

module.exports = comments