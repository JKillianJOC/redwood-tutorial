import { db } from 'src/lib/db'

export const createPost = ({ input }) => {
  return db.post.create({
    data: { ...input, userId: context.currentUser.id },
  })
}
