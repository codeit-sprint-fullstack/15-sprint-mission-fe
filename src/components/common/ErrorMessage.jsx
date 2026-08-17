//# 에러 상태 공통 컴포넌트
export default function ErrorMessage({message}){
  return (
    <div role="alert" style={{textAlign:'center',padding:'2rem 0',color:'var(--red-error)'}} >
      {message || '문제가 발생했습니다. 잠시후에 다시 시도해주세요'}
    </div>
  ) 
}
