'use client';

function CreateReply() {
  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label>댓글달기</label>
      <textarea />
      <button type="submit">등록</button>
    </form>
  );
}

export default CreateReply;
