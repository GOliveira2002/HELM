export default function DashboardPage() {
  return (
    <div>
      <h1
        style={{
          fontSize: 22,
          fontWeight: 600,
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          marginBottom: 8,
        }}
      >
        Dashboard
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>
        Welcome to HELM. Select a project to get started.
      </p>
    </div>
  )
}
