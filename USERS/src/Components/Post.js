import { Padding } from "@mui/icons-material";
import { Box, Card,CardContent } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { auth } from "../FirebaseConfig";
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";




const Post = ({post,deletePost}) => {
   
    if (!post.post){
        return null
    }
    return ( <div className="post">
        <Card className="postpost" variant="outlined" raised={true} sx={{}}>
            <CardContent>
            <Box sx={{ display: 'flex',flexWrap: 'wrap' ,justifyContent: 'space-between' }}>
          <Link to={"/Users/"+post.author.id}> <h1>{post.author.name}</h1></Link> 
            {auth.currentUser && auth.currentUser.uid===post.author.id &&(
             <IconButton color="error" onClick={()=>deletePost(post.id)}><DeleteIcon></DeleteIcon></IconButton> )}
             </Box>
        <p>{post.post}</p>
        </CardContent>
        </Card>
        
    </div> );
}
 
export default Post;