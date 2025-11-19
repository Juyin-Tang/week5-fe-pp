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
- Have code:
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },
  },
});
- How does this proxy setting work?
When the React frontend makes a request to /api/..., Vite intercepts it.

Instead of sending the request directly to the frontend server, Vite forwards it to the backend server running at http://localhost:4000.

The option changeOrigin: true ensures that the request headers are updated so the backend sees the request as if it came directly to its own origin.

This means frontend code can simply call /api/jobs without needing to hardcode the backend URL.

- What problems does it solve in the development environment?
Avoids CORS issues: Normally, the browser blocks requests between different ports (5173 for frontend and 4000 for backend). The proxy makes it look like the request is coming from the same origin, bypassing this restriction.

Cleaner frontend code: Developers don’t need to write full backend URLs like http://localhost:4000/api/jobs. Instead, they can just use /api/jobs.

Consistency: Makes switching between development and production easier. In production, the frontend and backend are often served from the same domain, so using /api works seamlessly.

Developer convenience: Simplifies testing and reduces configuration headaches during local development.

