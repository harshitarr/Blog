import connectMongo from "../../../utils/connectMongo";
import PostModel from "../../models/postModels";

export async function GET() {
  try {
    await connectMongo();

    const postData = await PostModel.find({});
    const jsonData = postData.map(post => post.toJSON()); 

    return Response.json(jsonData); 
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
