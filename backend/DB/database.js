const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "my_blog",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3307,
  }
);

const posts = sequelize.define("Posts", {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  imagePath: {
    type: DataTypes.STRING(100),
    allowNull: true,
    defaultValue: "./Sample.PNG",
  },
});

const comments = sequelize.define("Comments", {
  postid: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(10),
  },
  comment: {
    type: DataTypes.STRING(400),
  },
  password: {
    type: DataTypes.STRING(20),
  },
});

const users = sequelize.define("users", {
  email: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

exports.sequelize = sequelize;
exports.posts = posts;
exports.comments = comments;
exports.users = users;
