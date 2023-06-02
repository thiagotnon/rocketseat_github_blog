import { SearchContainer } from "./styles";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ChangeEvent, useContext } from "react";
import { BlogContext } from "../../../../contexts/BlogContext";

const searchFormSchema = zod.object({
  query: zod.string(),
});
type SearchFormInput = zod.infer<typeof searchFormSchema>;

interface SearchFormProps {
  total: number;
}
export const SearchForm = ({ total }: SearchFormProps) => {
  const { searchPost } = useContext(BlogContext);
  const { register } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleChangeSearchPost = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    searchPost(event.target.value);
  };

  return (
    <SearchContainer>
      <div>
        <label htmlFor="search">Publicações</label>
        {total > 0 && (
          <span>
            {total <= 1 ? `${total} publicação` : `${total} publicações`}
          </span>
        )}
      </div>
      <input
        id="search"
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query", { onChange: handleChangeSearchPost })}
      />
    </SearchContainer>
  );
};
