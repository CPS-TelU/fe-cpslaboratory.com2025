# Backend Integration Setup

This document explains how to integrate your backend with the Next.js frontend blog.

## Backend Setup

1. **Start your backend server:**
   ```bash
   cd db-cps
   npm install
   npm run dev
   ```
   Your backend should be running on `http://localhost:3001`

2. **Database Setup:**
   Make sure your PostgreSQL database is running and the `DATABASE_URL` is configured in your backend environment.

3. **Run Prisma migrations:**
   ```bash
   cd db-cps
   npx prisma migrate dev
   npx prisma generate
   ```

## Frontend Setup

1. **Environment Configuration:**
   Create a `.env.local` file in the root of your Next.js project:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
   ```

2. **Start the frontend:**
   ```bash
   npm install
   npm run dev
   ```

## API Endpoints

The frontend now uses these backend endpoints:

- `GET /api/v1/content` - Get all blog posts
- `GET /api/v1/content/:slug` - Get a specific blog post by slug

## Features Integrated

✅ **Blog List Page** (`/blog`)
- Fetches content from your backend API
- Displays articles with cover images, titles, content previews
- Shows tags and author information
- Handles loading and error states

✅ **Article Detail Page** (`/articles/[slug]`)
- Fetches individual articles by slug
- Displays full article content with HTML rendering
- Shows author information and tags
- Includes proper navigation

✅ **Backend Updates**
- Updated content repository to include author and tags
- Updated content service to include related data
- Proper ordering by creation date

## Data Structure

The integration expects this data structure from your backend:

```typescript
interface Content {
  id: string;
  title: string;
  slug: string;
  content: string;
  coverImg: string;
  authorId: string;
  author?: {
    id: string;
    name: string;
    email: string;
  };
  tags: Array<{
    tag: {
      id: string;
      name: string;
    };
  }>;
  createdAt: string;
  updatedAt: string;
}
```

## Testing

1. Start both backend and frontend servers
2. Visit `http://localhost:3000/blog` to see your blog posts
3. Click on any article to view the full content
4. Make sure your backend has some sample content in the database

## Troubleshooting

- **CORS Issues**: Make sure your backend has CORS enabled for `http://localhost:3000`
- **API Connection**: Check that `NEXT_PUBLIC_API_URL` matches your backend URL
- **Database**: Ensure your database is running and migrations are applied
- **Content**: Make sure you have some content in your database to display
