import { Can } from "./access-control";

const examplePosts = [
  {
    title: "How to Build a React App from Scratch",
    published: false,
  },
  {
    title: "10 Tips for Writing Clean Code in JavaScript",
    published: true,
  },
  {
    title: "Introduction to Machine Learning with Python",
    published: false,
  },
];

export const Posts = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>Posts</h5>
        <div>
          <Can I="add" a="Post">
            <button className="secondary  small-button">Add Post</button>
          </Can>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Published</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <Can I="read" a="Post">
            {examplePosts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </Can>
        </tbody>
      </table>
    </>
  );
};

export const Post = ({ post }) => {
  return (
    <tr>
      <td>{post.title}</td>
      <td>{post.published ? "✅" : "❌"}</td>
      <td>
        <div style={{ display: "flex" }}>
          <Can I="update" a="Post">
            <button className="small-button">Edit</button>
          </Can>
          <Can I="delete" a="Post">
            <button className="secondary small-button">Delete</button>
          </Can>
        </div>
      </td>
    </tr>
  );
};
