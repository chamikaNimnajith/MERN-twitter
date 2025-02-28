import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    text:{
        type:String,
    },
    img:{
        type:String,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    comments:[
       {
        text:{
            type:String,
            required:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
       }
    ]
    
},{timestamps:true});

const Post = mongoose.model("Post",postSchema);
export default Post




// example post

// {
//   "_id": "65dbe3f79a3b2c001e8d4f1a",
//   "user": "65dbe3c89a3b2c001e8d4f18",
//   "text": "This is my first post!",
//   "img": "https://example.com/image.jpg",
//   "likes": [
//     "65dbe3fa9a3b2c001e8d4f1b",
//     "65dbe3fb9a3b2c001e8d4f1c"
//   ],
//   "comments": [
//     {
//       "text": "Nice post!",
//       "user": "65dbe3fc9a3b2c001e8d4f1d"
//     },
//     {
//       "text": "Great content, keep it up!",
//       "user": "65dbe3fd9a3b2c001e8d4f1e"
//     }
//   ],
//   "createdAt": "2025-02-26T12:00:00.000Z",
//   "updatedAt": "2025-02-26T12:05:00.000Z"
// }
