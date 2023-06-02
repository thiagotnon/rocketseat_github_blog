import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface ProfileProps {
  avatar_url: string;
  login: string;
  name: string;
  followers: number;
  html_url: string;
  bio: string;
  company: string;
}

interface PostProps {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

interface BlogContextProps {
  posts: PostProps[];
  profile: ProfileProps;
  loading: boolean;
  searchPost: (query: string) => Promise<void>;
}
export const BlogContext = createContext({} as BlogContextProps);

interface BlogPropviderProps {
  children: ReactNode;
}

export const BlogPropvider = ({ children }: BlogPropviderProps) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [profile, setProfile] = useState({} as ProfileProps);

  const fetchProfile = async () => {
    const { data } = await api.get("users/thiagotnon");
    setProfile(data);
  };

  const fetchPosts = async () => {
    const { data } = await api.get(
      "repos/thiagotnon/rocketseat_github_blog/issues"
    );
    setPosts(data);
  };

  const searchPost = async (query: string) => {
    setLoading(true);
    if (query.length > 4) {
      const response = await api.get(
        `/search/issues?q=${query}%20repo:thiagotnon/rocketseat_github_blog`
      );
      setPosts(response.data.items);
      setLoading(false);
    } else {
      fetchPosts();
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProfile();
    fetchPosts();
    setLoading(false);
  }, []);

  return (
    <BlogContext.Provider value={{ profile, posts, searchPost, loading }}>
      {children}
    </BlogContext.Provider>
  );
};
