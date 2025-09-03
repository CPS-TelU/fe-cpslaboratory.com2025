// API configuration and client for backend integration

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

export interface Tag {
  id: string;
  name: string;
}

export interface ContentTag {
  tag: Tag;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'User';
}

export interface Content {
  id: string;
  title: string;
  slug: string;
  content: string;
  coverImg: string;
  authorId: string;
  author?: User;
  tags: ContentTag[];
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Content API methods
  async getContents(): Promise<ApiResponse<Content[]>> {
    return this.request<ApiResponse<Content[]>>('/content');
  }

  async getContentBySlug(slug: string): Promise<ApiResponse<Content>> {
    return this.request<ApiResponse<Content>>(`/content/${slug}`);
  }

  async createContent(contentData: {
    title: string;
    content: string;
    coverImg: string;
    tags: string[];
  }, token?: string): Promise<ApiResponse<Content>> {
    return this.request<ApiResponse<Content>>('/content/create', {
      method: 'POST',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(contentData),
    });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
