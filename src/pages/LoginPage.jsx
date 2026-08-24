import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: '30px', gap: '12px'}}>
      <h1>로그인 페이지입니다.</h1>
      <p>아직 개발중인 페이지입니다. 아래 링크로 돌아가주시기 바랍니다.</p>
      <Link to="/">메인페이지로 돌아가기</Link>
    </div>
  );
}
