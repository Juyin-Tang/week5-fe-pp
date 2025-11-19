# Backend and Proxy Insights

## 1. Understanding the Virtual Field in Backend
### Question: What does this code accomplish? Why is it useful in your application?
- virtuals: true ensures that computed or virtual fields are included when a document is converted to JSON.The transform function maps the MongoDB _id field to id, so the frontend can access it as job.id instead of job._id.

- Why useful: Makes the API cleaner for the frontend.• Prevents frontend developers from needing to know about MongoDB’s internal _id.

## 2.CORS Middleware
### Question: What is CORS, and why is it necessary for the application to include this middleware?
- CORS (Cross-Origin Resource Sharing) allows the frontend application to make requests to a backend server running on a different origin (domain, port, or protocol). Without it, the browser would block these requests.

- 1.During development, the React frontend often runs on a different port than the Node.js backend.
2.Enabling CORS ensures the frontend can fetch data without errors.

## 3.Proxy Configuration in Frontend
### How does this proxy setting work, and what problems does it solve in the development environment?
- 
