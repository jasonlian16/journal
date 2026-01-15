import { CalendarComponent } from "./components/Calendar"
import { CurrentDate } from "./components/Date"

function App() {
  return(
    <main>
      <div>
        <button>+ New Entry</button>
        <CalendarComponent/>
      </div>

      <div>
        <h1>Welcome, User</h1>
        <CurrentDate/>
      </div>
    </main>
    
  )
}

export default App
