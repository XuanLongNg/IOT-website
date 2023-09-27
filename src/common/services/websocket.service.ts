import io from "socket.io-client";

const socket = io("http://localhost:4000");

socket.on("connect", () => {
  console.log("Connected to server");
});
export default socket;
