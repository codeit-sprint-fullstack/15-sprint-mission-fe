//# 데이터 없음 상태 공통 컴포넌트
export default function EmptyState({massage='등록된 데이터가 없습니다.'}){
  return (
    <div style={{ textAlign: 'center', padding: '2rem 0', color: '#888780' }}>
      {massage}
    </div>

  );
}