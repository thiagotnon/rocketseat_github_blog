import { MarkdownFormater } from "../../../../components/MardownFormater";
import { formatExcerpt } from "../../../../utils/formaters";
import { CardBody, CardContainer, CardHeader } from "./styles";

interface CardProps {
  title: string;
  body: string;
  created_at: string;
}
export const Card = ({ title, body, created_at }: CardProps) => {
  return (
    <CardContainer>
      <CardHeader>
        <h3>{title}</h3>
        <span>{created_at}</span>
      </CardHeader>
      <CardBody>
        <MarkdownFormater content={formatExcerpt(body, 20)} />
      </CardBody>
    </CardContainer>
  );
};
