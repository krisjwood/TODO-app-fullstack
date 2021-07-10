import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import TodosList from './TodosList'
import Footer from './Footer'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <header className="header">
        <h1>todos by Kris</h1>
        <AddTodo />
      </header>
      <section className="main">
        <TodosList/>
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
