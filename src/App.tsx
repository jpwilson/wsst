import Button from "./components/Button";
import Alert from "./components/Alert";

import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <p>Now, I can put anything here</p>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} buttonVariant="warning">
        This is the style in the btn
      </Button>
    </div>
  );
}

export default App;
