import express from 'express';

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
});

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

User.hasMany(Post, {
  foreignKey: {
    allowNull: false,
    name: 'userId'
  }
});
Post.belongsTo(User, { foreignKey: { allowNull: false, name: 'userId' }, onDelete: 'CASCADE' });

sequelize.sync();





const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.get('/users', getUsers);
app.post('/users', createUser);
app.get('/users/:id', getUserById);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);
app.get('/posts', getPosts);
app.post('/posts', createPost);
app.get('/posts/:id', getPostById);
app.put('/posts/:id', updatePost);
app.delete('/posts/:id', deletePost);

app.listen(port, () => console.log(`Server is running on port ${port} http://localhost:${port}`));
