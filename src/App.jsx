import { HomePage } from './HomePage';
import { FiltersActive } from './FiltersActive'
import { FiltersCompleted } from './FiltersCompleted'
import { Header } from './Header'
import { NotFoundPage } from './NotFoundPage'

export default function App() {
  const currentPath = window.location.pathname

  let page = <NotFoundPage />

  if (currentPath === '/') {
    page = <HomePage />
  } else if (currentPath === "/active") {
    page = <FiltersActive />
  } else if (currentPath === '/completed') {
    page = <FiltersCompleted />
  }
  return (
    <>
      <Header />
      {page}
    </>
  )
}
