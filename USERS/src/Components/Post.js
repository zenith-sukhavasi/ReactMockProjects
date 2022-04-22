import { Padding } from "@mui/icons-material";
import { Avatar, Box, Card, CardContent } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { auth } from "../FirebaseConfig";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../DATA/userContext";

const Post = ({ post, deletePost, id }) => {
    const { getUserInfo,getTime } = useContext(UserContext);
    const user = useSelector((state) => state.users.user);
    let userdata = null;
    const [userinfo, setUserInfo] = useState({});
    let userdata2 = { pell: "sdds", pool: { peli: "ssd" } };

    useEffect(() => {
        if (id !== post.author.id) {
            let userref = getUserInfo(post.author.id).then((userd) => {
                setUserInfo({ ...userd });
                console.log(userdata);
            });
        }
    }, []);
    if (!post.post) {
        return null;
    }
    let dat = new Date(post.timestamp.seconds)
    let date = new Date(parseInt((post.timestamp.seconds.toString() + Math.floor(post.timestamp.nanoseconds / 1000000).toString())));
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = months[date.getMonth()];
    console.log(post.timestamp);
    console.log('new date', date);
    // console.log(dat.toLocaleString());
    // console.log(dat.getUTCDay());
    console.log('times,',new Date().getTime() ,date.getTime())
    console.log(date.getDate(),month, 'at', date.getHours(),date.getMinutes());
    console.log(userinfo);
    const time=getTime(post.timestamp)
    console.log(time);
    return (
        <div className="post">
            <Card className="postpost" variant="outlined" raised={true} sx={{}}>
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                        }}
                    >

                        <Link to={"/Users/" + post.author.id}>
                            <div className="uinfo">
                                {auth.currentUser && auth.currentUser.uid === post.author.id ? (
                                    <Avatar src={user.photoURL}></Avatar>
                                ) : <Avatar src={userinfo?.photoUrl}></Avatar>}
                                <div>
                                <h2>{post.author.name}</h2>
                                <p>{time}</p>
                                </div>
                            </div>
                        </Link>
                        {auth.currentUser && auth.currentUser.uid === post.author.id && (
                            <IconButton color="error" onClick={() => deletePost(post.id)}>
                                <DeleteIcon></DeleteIcon>
                            </IconButton>
                        )}
                    </Box>
                    <p>{post.post}</p>
                    <p>{userinfo?.personalDetails?.Location}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Post;
