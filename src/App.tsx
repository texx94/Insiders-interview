import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/Home";
import { IMessageEvent, w3cwebsocket as W3CWebSocket } from 'websocket';
import { useDispatch, useSelector } from "react-redux";
import { addMessage, initData, updateHistory } from "./state/data/dataSlice";
import { RootState } from "./state/store";

const client = new W3CWebSocket('ws://127.0.0.1:8000/replay_data?update_period=1&athlete_number=10&speed_factor=1&init_timestamp=0');

function App() {
  const isInitilized = useSelector((state: RootState) => state.data.isInitilized);
  const dispatch = useDispatch();

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message : IMessageEvent) => {
      const messagePayload = JSON.parse(message.data.toString());
      if (!isInitilized) {
        dispatch(initData(messagePayload));
      }
      dispatch(addMessage(messagePayload));
      dispatch(updateHistory(messagePayload));
    };
  }, [isInitilized, dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
