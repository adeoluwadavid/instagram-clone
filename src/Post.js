import React from 'react'
import './Post.css'
import { db } from './firebase'
import Avatar from '@material-ui/core/Avatar';
import firebase from 'firebase'

function Post({ user, postId, username, caption, imageUrl }) {
    const [comments, setComments] = React.useState([]);
    const [comment, setComment] = React.useState('');
    React.useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db.collection('posts').doc(postId)
                .collection('comments').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                })
        }
        return () => {
            unsubscribe()
        }
    }, [postId])

    const postComment = (e) => {
        e.preventDefault();

        db.collection('posts').doc(postId).collection('comments').add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setComment('');
    }

    return (
        <div className="post">
            <div className="post_header">
                <Avatar className="post_avatar" alt="David_Adewole" src="/static/images/avatar/1.jpg" />
                <h3>{username}</h3>
            </div>
            {/*header -> avatar + username  */}
            <img className="post_image" src={imageUrl} alt="post_image" />
            {/* image */}
            <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
            {/* username + caption */}

            <div className="post_comments">
                {comments.map((comment) => {
                    return (
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    )
                })}
            </div>
            {user && (
                <form className="post_commentBox">
                    <input
                        className="post_input"
                        type="text"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        disabled={!comment}
                        className="post_button"
                        type="submit"
                        onClick={postComment}
                    >
                        Post
                 </button>
                </form>
            )}

        </div>
    )
}

export default Post
