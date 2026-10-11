'use client';

import { useParams } from 'next/navigation';

function EditArticle() {
  const { id } = useParams();

  return <div>아티클 수정 페이지: {id}</div>;
}

export default EditArticle;
