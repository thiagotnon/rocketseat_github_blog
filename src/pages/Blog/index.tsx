import { useContext } from "react";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { BlogPosts, LoadignContainer, NotFoundContainer } from "./styles";
import { Card } from "./components/Card";
import { Link } from "react-router-dom";
import { BlogContext } from "../../contexts/BlogContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const Blog = () => {
  const { posts, profile, loading } = useContext(BlogContext);

  return (
    <>
      <Profile data={profile} />
      <SearchForm total={posts.length} />

      {loading ? (
        <LoadignContainer>
          <FontAwesomeIcon icon={faCircleNotch} size="2xl" spin />
        </LoadignContainer>
      ) : (
        <>
          {posts?.length > 0 ? (
            <BlogPosts>
              {posts.map((post) => (
                <Link key={post.id} to={`post/${post.number}`}>
                  <Card
                    title={post.title}
                    body={post.body}
                    created_at={formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  />
                </Link>
              ))}
            </BlogPosts>
          ) : (
            <NotFoundContainer>
              <h3>Nenhum post encontrado.</h3>
            </NotFoundContainer>
          )}
        </>
      )}
    </>
  );
};
