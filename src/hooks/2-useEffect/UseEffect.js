import React, { useState, useEffect } from "react";
import "./Main.css";

export default function UseEffect() {
  const [resourceType, setResourceType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  const renderUsers = (items) => {
    return (
      <div>
        {items.map((item) => (
          <RenderUser key={item.id} item={item} />
        ))}
      </div>
    );
  };

  const RenderUser = ({ item }) => {
    return (
      <div className="user">
        <p>{item.name}</p>
        <p>{item.username}</p>
        <p>{item.phone}</p>
        <p>{item.email}</p>
        <p>{item.website}</p>
      </div>
    );
  };

  const renderPosts = (items) => {
    return (
      <div>
        {items.map((item) => (
          <RenderPost key={item.id} item={item} />
        ))}
      </div>
    );
  };

  const RenderPost = ({ item }) => {
    return (
      <div className="post">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </div>
    );
  };

  const renderComments = (items) => {
    return (
      <div>
        {items.map((item) => (
          <RenderComment key={item.id} item={item} />
        ))}
      </div>
    );
  };

  const RenderComment = ({ item }) => {
    return (
      <div className="comment">
        <h3>{item.name}</h3>
        <p>{item.body}</p>
      </div>
    );
  };

  return (
    <div className="body">
      <h1>useEffect Hook</h1>
      <div className="button-container">
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <div className="resource-container">
        {resourceType === "users" && renderUsers(items)}
        {resourceType === "posts" && renderPosts(items)}
        {resourceType === "comments" && renderComments(items)}
      </div>
    </div>
  );
}
