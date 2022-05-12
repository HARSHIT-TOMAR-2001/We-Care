import { Button } from "react-bootstrap";
function Home() {
  return (
    <div className="App">
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{" "}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
    </div>
  );
}

export default Home;
