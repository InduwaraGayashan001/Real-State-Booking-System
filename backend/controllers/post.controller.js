import prisma from "../lib/prisma.js";

export const getPosts = async (req, res) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: query.city || undefined,
        type: query.type || undefined,
        property: query.property || undefined,
        bedroom: parseInt(query.bedroom) || undefined,
        price: {
          gte: parseInt(query.minPrice) || undefined,
          lte: parseInt(query.maxPrice) || undefined,
        },
      },
    });

    // setTimeout(() => {
    res.status(200).json(posts);
    // }, 3000);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get posts" });
  }
};

export const getPost = async (req, res) => {
    const id = req.params.id
    try {
      const post = await prisma.post.findUnique({
          where: { id },
          include: {
              postDetail: true,
              user: {
                  select: {
                      userName: true,
                      avatar: true
                  }
              },
          }
      });
      res.status(200).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to get post" });
    }
};
  

export const addPost = async (req, res) => {
    const body = req.body;
    const tokenUserId = req.userId; // Assuming user ID is stored in req.user after token verification
    try {
      const newPost = await prisma.post.create({
        data: {
              ...body.postData,
              userId: tokenUserId,
              postDetail: {
                  create: body.postDetail, // Assuming postDetail is part of the request body
              }
            },
      });
      res.status(200).json(newPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create post" });
    }
};
  

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId; // Assuming user ID is stored in req.user after token verification
    const body = req.body;
    try {
      const updatedPost = await prisma.post.update({
        where: { id },
        data: {
          ...body.postData,
          userId: tokenUserId,
          postDetail: {
            update: body.postDetail,
          },
        },
      });
      res.status(200).json(updatedPost);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to update post" });
    }
};


export const deletePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId; // Assuming user ID is stored in req.user after token verification
    try {
      const post = await prisma.post.findUnique({
          where: { id },
      });
      if (post.userId !== tokenUserId) {
        return res.status(403).json({ error: "Not authorized!" });
        }
      await prisma.postDetail.deleteMany({
        where: { postId: id },
      });
      await prisma.post.delete({
        where: { id },
      });
      res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to delete post", error });
    }
};
  

  
