//# 로딩 상태 공통 컴포넌트
export default function LoadingSpinner(){
  return (
    <div role="status" aria-live="polite" style={{textAlign:'center', padding:'2rem 0'}} >
      불러오는 중...
    </div>
  )
}