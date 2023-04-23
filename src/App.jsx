import React from 'react'
import SearchUsers from './UsersList'
import SearchTodos from './TodoList'


function App() {
  return (
    <>
      <h2>Higher Order Components</h2>
      <div className="section">
        <div>
          <SearchUsers/>
        </div>
        <div>
          <SearchTodos/>
        </div>
        
      </div>
    </>
  )
}

export default App
