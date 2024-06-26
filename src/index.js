import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const express = require("express");
const app = express();
const cors = require("cors");
const BlogPosts = require("./BlogPosts");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(cors());
app.post("/api/post", jsonParser, (req, res) => {
const post = {
slug: req.body.slug,
title: req.body.title,
description: req.body.description,
};
BlogPosts.BlogPosts.push(post);
res.status(200).send({ message: "Posted successful" });
});
app.post("/api/login", jsonParser, (req, res) => {
  const creds = {
  username: req.body.username,
  password: req.body.password,
  };
  if (creds.username === "admin" && creds.password === "123")
  {
  res.status(200)
  .send({ message: "Login successful"});
  
  } else {
  res.status(400).send({ message: "Login failed}"});
  }
  });
  app.get("/api/posts", function (req, res) {
    res.send(JSON.stringify(BlogPosts.BlogPosts));
    });
    app.get("/api/post/:slug", function (req, res) {
    const slug = req.params.slug;
    const post =
    BlogPosts.BlogPosts.find((element) => element.slug === slug);
    if (post) res.send(JSON.stringify(post));
    else res.status(404).send("Not found");
    });