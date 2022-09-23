import TaskCard from './components/TaskCard';

const tasks = [
  {
    id: 'unique_id_001',
    subtitle: 'subtitle',
    createdAt: '2022-08-21T12:16:24.420Z',
    tags: [
      {
        id: 'tag_id_001',
        text: "It's Done",
        icon: 'T',
      },
      {
        id: 'tag_id_002',
        text: "It's Cancelled",
        icon: 'X',
      },
    ],
    comments: [
      {
        id: 'comment_id_001',
        user: {
          id: 'user_id_001',
          name: 'Ali',
          avatar: 'xyz.com',
        },
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolores, rerum ex veritatis ullam exercitationem quasi assumenda rem. Excepturi quasi assumenda ab officiis perspiciatis commodi praesentium maiores, vitae est magnam!',
      },
    ],
    tasks: [
      {
        id: 'task_id_001',
        title: 'Foggy Nelson',
        text: 'Here to clean the streets of hells kitchen',
        status: 'done',
      },
      {
        id: 'task_id_002',
        title: 'Louis CK',
        text: 'This one cancelled',
        status: 'done',
      },
      {
        id: 'task_id_003',
        title: 'Albert Einstein',
        text: 'In progress',
        status: 'progres',
      },
      {
        id: 'task_id_004',
        title: 'Albert Einstein',
        text: 'In progress',
        status: 'progres',
      },
    ],
  },
  {
    id: 'unique_id_002',
    subtitle: 'subtitle',
    createdAt: '2022-08-21T12:16:24.420Z',
    tags: [
      {
        id: 'tag_id_001',
        text: "It's Done",
        icon: 'T',
      },
      {
        id: 'tag_id_002',
        text: "It's Cancelled",
        icon: 'X',
      },
      {
        id: 'tag_id_003',
        text: "It's In Progress",
        icon: 'P',
      },
      {
        id: 'tag_id_004',
        text: 'Just wrote this',
        icon: 'O',
      },
    ],
    comments: [],
    tasks: [
      {
        id: 'task_id_001',
        title: 'Foggy Nelson',
        text: 'Here to clean the streets of hells kitchen',
        status: 'done',
      },
      {
        id: 'task_id_002',
        title: 'Louis CK',
        text: 'This one cancelled',
        status: 'cancelled',
      },
    ],
  },
  {
    id: 'unique_id_003',
    subtitle: 'subtitle',
    createdAt: '2022-08-21T12:16:24.420Z',
    tags: [
      {
        id: 'tag_id_001',
        text: "It's Done",
        icon: 'T',
      },
      {
        id: 'tag_id_002',
        text: "It's Cancelled",
        icon: 'X',
      },
      {
        id: 'tag_id_003',
        text: "It's In Progress",
        icon: 'P',
      },
      {
        id: 'tag_id_004',
        text: 'Just wrote this',
        icon: 'O',
      },
    ],
    comments: [
      {
        id: 'comment_id_001',
        user: {
          id: 'user_id_001',
          name: 'Ali',
          avatar: 'xyz.com',
        },
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolores, rerum ex veritatis ullam exercitationem quasi assumenda rem. Excepturi quasi assumenda ab officiis perspiciatis commodi praesentium maiores, vitae est magnam!',
      },
      {
        id: 'comment_id_002',
        user: {
          id: 'user_id_001',
          name: 'Anis',
          avatar: 'abc.com',
        },
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolores, rerum ex veritatis ullam exercitationem quasi assumenda rem. Excepturi quasi assumenda ab officiis perspiciatis commodi praesentium maiores, vitae est magnam!',
      },
    ],
    tasks: [
      {
        id: 'task_id_001',
        title: 'Foggy Nelson',
        text: 'Here to clean the streets of hells kitchen',
        status: 'done',
      },
    ],
  },
  {
    id: 'unique_id_004',
    subtitle: 'subtitle',
    createdAt: '2022-08-21T12:16:24.420Z',
    tags: [
      {
        id: 'tag_id_001',
        text: "It's Done",
        icon: 'T',
      },
    ],
    comments: [
      {
        id: 'comment_id_001',
        user: {
          id: 'user_id_001',
          name: 'Ali',
          avatar: 'xyz.com',
        },
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolores, rerum ex veritatis ullam exercitationem quasi assumenda rem. Excepturi quasi assumenda ab officiis perspiciatis commodi praesentium maiores, vitae est magnam!',
      },
    ],
    tasks: [],
  },
  {
    id: 'unique_id_005',
    subtitle: 'subtitle',
    createdAt: '2022-08-21T12:16:24.420Z',
    tags: [
      {
        id: 'tag_id_001',
        text: "It's Done",
        icon: 'T',
      },
    ],
    comments: [
      {
        id: 'comment_id_001',
        user: {
          id: 'user_id_001',
          name: 'Ali',
          avatar: 'xyz.com',
        },
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio dolores, rerum ex veritatis ullam exercitationem quasi assumenda rem. Excepturi quasi assumenda ab officiis perspiciatis commodi praesentium maiores, vitae est magnam!',
      },
    ],
    tasks: [
      {
        id: 'task_id_001',
        title: 'Foggy Nelson',
        text: 'Here to clean the streets of hells kitchen',
        status: 'done',
      },
    ],
  },
];

const App = () => {
  return (
    <div className="cards-group">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default App;
