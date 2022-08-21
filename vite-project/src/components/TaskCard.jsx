import '../App.css';
import TagListItem from './TagListItem';
import CommentList from './CommentsList';
import TaskList from './TaskList';

const getDay = (dateStr) => {
  const day = new Date(dateStr).getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[day];
};
// console.log(getDay(task.createdAt))

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};
// console.log(formatDate(task.createdAt));

const TaskCard = ({ task }) => {
  return (
    <div className="day-card">
      <h1 className="title">
        {getDay(task.createdAt)}, {formatDate(task.createdAt)}
      </h1>
      <h3 className="sub-title">{task.subtitle}</h3>

      <ul className="tag-ul">
        {task.tags.map((tag) => (
          <TagListItem key={tag.id} tag={tag} />
        ))}
      </ul>
      <hr />

      <p className="notes">Notes linked to people</p>

      <div className="comments">
        {task.comments.map((comment) => (
          <CommentList key={comment.id} comment={comment} />
        ))}
      </div>

      <ul>
        {task.tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;
