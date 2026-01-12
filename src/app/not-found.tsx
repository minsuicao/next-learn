// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Trang bạn tìm kiếm không tồn tại
      </p>
      <Link 
        href="/"
        style={{
          padding: '12px 24px',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px'
        }}
      >
        Quay về trang chủ
      </Link>
    </div>
  );
}