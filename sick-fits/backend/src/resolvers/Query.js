const { forwardTo } = require('prisma-binding')

const Query = {
  //   async items(parent, args, ctx, info) {
  //     const items = await ctx.db.query.items()
  //     return items
  //   }

  // shortcut for the above where no filtering or custom logic is req'd
  items: forwardTo('db')
}

module.exports = Query
