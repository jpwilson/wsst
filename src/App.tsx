import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        <p>Now, I can put anything here</p>
      </Alert>
      <Button
        onClick={() => console.log("we clicked bros!")}
        buttonVariant="warning"
      >
        This is the style in the btn
      </Button>
    </div>
  );
}

export default App;
