function ReplyItem({ reply }) {
  const { id, content, createdAt, articleId } = reply;
  return <div>{content}</div>;
}
export default ReplyItem;
