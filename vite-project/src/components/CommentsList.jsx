const CommentList = ({comment}) => {
  return (
    <div>
      <p>
        <small>{comment.user.avatar}</small> - {comment.user.name}
      </p>
      <p> {comment.text} </p>
    </div>
  );
};

export default CommentList;
