import "./App.css";

import Todos from "./components/Todos";
import Card from "./UI/Card";

function App() {
  return (
    <div>
      <Card>
        <Todos />
      </Card>
    </div>
  );
}

export default App;
