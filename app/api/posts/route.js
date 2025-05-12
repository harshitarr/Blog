import connectMongo from '../../../utils/connectMongo'
import PostModel from "../../models/postModels";

export async function GET(req) {
  const query = req.nextUrl.searchParams.get('q') // quesry parameter name
  try {
    await connectMongo();
    let postData
    if(query){
          postData = await PostModel.find({
            $or : [
              {title : new RegExp(query,'i')} , // i na uppercase lowercase num lam pakathu
              {description : new RegExp(query,'i')}
            ]
          });}
    else{
          postData = await PostModel.find({});

    }
    return Response.json(postData);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}

