export function Header() {
  return (
    <>
      <header>
        <h1>
          Task manager
        </h1>
      </header>
      <nav>
        <li style={{ listStyle: 'none', textDecoration: 'none', display: 'flex', gap: '5px' }}>
          <a href="/">Home</a>
          <a href="/active">Active</a>
          <a href="/completed">Completed</a>
        </li>
      </nav>
    </>

  )
}
