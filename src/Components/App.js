import "./styles.css";
import { MagicEightBall } from "./Magic.js";

export default function App() {
  return (
    <div className="App">
      <MagicEightBall
        title="Magic 8 Ball"
        imgURL="https://i.ytimg.com/vi/WSaS17CSS4c/maxresdefault.jpg"
      />
    </div>
  );
}
