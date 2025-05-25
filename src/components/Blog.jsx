import React from 'react';
import './Blog.css';


const blogPosts = [
  {
    id: 1,
    title: "Mastering JavaScript",
    author: "Niaz Ali",
    date: "May 1, 2025",
    image: "https://res.cloudinary.com/harendra21/image/upload/w_1200/javascriptwithexample/What-Is-JavaScript-Used-For_zu3jwj.jpg",
    excerpt: "JavaScript is the key to interactive web pages. Learn the core concepts and best practices.",
  },
  {
    id: 2,
    title: "CSS Flexbox Guide",
    author: "Sara Khan",
    date: "May 2, 2025",
    image: "https://miro.medium.com/v2/resize:fit:1183/1*ubDrM-3m22gLF_pZ4DCdMw.png",
    excerpt: "Flexbox makes layout design easy and responsive. Here's your complete guide.",
  },
  {
    id: 3,
    title: "React State Management",
    author: "Ali Raza",
    date: "May 3, 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRPJnIvRWkOGcCx8ktMZ77A_NpWhcOd9dsg&s",
    excerpt: "Understand how to manage complex state in your React apps effectively.",
  },
  {
    id: 4,
    title: "HTML Semantic Tags",
    author: "Zoya Ahmed",
    date: "May 4, 2025",
    image: "https://browserstack.wpenginepowered.com/wp-content/uploads/2023/04/Types-of-Html-semantic-tags-e1682414918948.png",
    excerpt: "Semantic HTML improves accessibility and SEO. Learn the essential tags.",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    author: "Niaz Ali",
    date: "May 5, 2025",
    image: "https://www.csschopper.com/blog/wp-content/uploads/2013/10/Responsive-Web-Design.png",
    excerpt: "Learn how to create websites that look great on all devices.",
  },
  {
    id: 6,
    title: "Node.js Basics",
    author: "Sara Khan",
    date: "May 6, 2025",
    image: "https://www.loginradius.com/assets/blog/engineering/node-http-module-server/coverImage.webp",
    excerpt: "Node.js lets you build server-side apps with JavaScript. Here’s where to begin.",
  },
  {
    id: 7,
    title: "API Integration in React",
    author: "Ali Raza",
    date: "May 7, 2025",
    image: "https://www.dckap.com/wp-content/uploads/2023/06/API-Integration-Blog-header.png",
    excerpt: "Fetch data from REST APIs in your React app using fetch and Axios.",
  },
  {
    id: 8,
    title: "Git and GitHub Workflow",
    author: "Zoya Ahmed",
    date: "May 8, 2025",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS1nyoC8NgfJckuzP60BOAHDjiXmeZLLTIg&s",
    excerpt: "Version control is essential. Master Git and GitHub with these simple steps.",
  },
  {
    id: 9,
    title: "Using Framer Motion",
    author: "Niaz Ali",
    date: "May 9, 2025",
    image: "https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png",
    excerpt: "Add beautiful animations to your React projects with Framer Motion.",
  },
  {
    id: 10,
    title: "Building Forms in React",
    author: "Sara Khan",
    date: "May 10, 2025",
    image: "https://res.cloudinary.com/herotofu/image/upload/f_auto,c_limit,w_1920,q_auto/images/guides/react-contact-form-example.png",
    excerpt: "Learn how to handle forms in React with validation and hooks.",
  },
  {
    id: 11,
    title: "Tailwind CSS Overview",
    author: "Ali Raza",
    date: "May 11, 2025",
    image: "https://made-byshape.transforms.svdcdn.com/production/uploads/images/tailwind-thumb.jpg?w=1200&h=630&q=82&auto=format&fit=crop&dm=1609771799&s=cf6808f47c661d9731991f98033c1200",
    excerpt: "A utility-first CSS framework that makes designing fast and consistent.",
  },
  {
    id: 12,
    title: "Dark Mode with CSS",
    author: "Zoya Ahmed",
    date: "May 12, 2025",
    image: "https://i2.wp.com/css-tricks.com/wp-content/uploads/2020/06/MD5XiU_A.png?fit=1024%2C523&ssl=1",
    excerpt: "Learn how to create a dark mode feature using CSS variables.",
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-heading">Latest Blog Posts</h2>
      <div className="blog-cards-container">
        {blogPosts.map(post => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <div className="blog-meta">
                <span className="blog-author">By {post.author}</span> | <span className="blog-date">{post.date}</span>
              </div>
              <p className="blog-excerpt">{post.excerpt}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
