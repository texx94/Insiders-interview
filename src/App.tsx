import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from 'websocket';
import { useDispatch } from "react-redux";
import { addMessage } from "./state/data/dataSlice";

const client = new W3CWebSocket('ws://127.0.0.1:8000/replay_data?update_period=1&athlete_number=10&speed_factor=1&init_timestamp=0');

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message : IMessageEvent) => {
      const messagePayload = JSON.parse(message.data.toString());
      console.log('got reply! ', messagePayload);
      dispatch(addMessage(messagePayload));
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
