import React from 'react'
import UsersList from './UsersList'
import TodoList from './TodoList'


function App() {
  return (
    <>
      <h2>Higher Order Components</h2>
      <div className="section">
        <div>
          <UsersList/>
        </div>
        <div>
          <TodoList/>
        </div>
        
      </div>
    </>
  )
}

export default App
