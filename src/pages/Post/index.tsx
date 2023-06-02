import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostContent, PostMetaContainer, PostMetaContent } from "./styles";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { api } from "../../lib/axios";

import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { MarkdownFormater } from "../../components/MardownFormater";

interface UserProps {
  login: string;
}

interface SinglePostProps {
  title: string;
  html_url: string;
  comments: number;
  created_at: string;
  user: UserProps;
  body: string;
}
export const Post = () => {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState<SinglePostProps>();

  const fetchPost = async (id: string) => {
    const { data } = await api.get(
      `repos/thiagotnon/rocketseat_github_blog/issues/${id}`
    );
    setSinglePost(data);
  };

  useEffect(() => {
    if (id) fetchPost(id);
  }, [id]);

  return (
    <PostMetaContainer>
      <PostMetaContent>
        <div>
          <Link to="/">
            <FontAwesomeIcon icon={faChevronLeft} /> Voltar
          </Link>
          <a href={singlePost?.html_url} target="_blank">
            Ver no GitHub <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>{singlePost?.title}</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            {singlePost?.user.login}
          </li>

          {singlePost?.created_at && (
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              {formatDistanceToNow(new Date(singlePost.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </li>
          )}

          <li>
            <FontAwesomeIcon icon={faComment} />
            {singlePost?.comments} comentários
          </li>
        </ul>
      </PostMetaContent>

      <PostContent>
        {singlePost?.body && <MarkdownFormater content={singlePost.body} />}
      </PostContent>
    </PostMetaContainer>
  );
};
