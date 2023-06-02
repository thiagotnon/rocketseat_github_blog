export const formatExcerpt = (text: string, limit: number) => {
  if (text.length > limit) {
    const words = text.split(" ");
    const limitedWords = words.slice(0, limit);
    const createExcerpt = limitedWords.join(" ") + "...";

    return createExcerpt;
  }
  return text;
};
