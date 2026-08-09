import TasksList from "./components/TasksList.tsx";
function App() {
  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row align-items-center">
          <div className="col text-bg-dark p-3 rounded min-vh-100 d-flex flex-column">
            <div className="d-flex justify-content-center mt-4">
              <h1 className="mt-5">To-Do List</h1>
            </div>
            <div
              className="w-50 mx-auto flex-grow-1 overflow-auto"
              style={{ marginTop: "20vh" }}
            >
              <TasksList></TasksList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
