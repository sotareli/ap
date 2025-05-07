import post from "../models/Post.js";

class PostController{

    static async listarPosts( req, res) {
        try{
            const listaPosts = await post.find({});
            res.status(200).json(listaPosts)
        }catch(erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição`});

        }

    }

};

export default PostController;