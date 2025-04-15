import { Routes, Route } from "react-router";
import Homepage from "../Pages/Home";
import About from "../Pages/About";
import Menu from "../Pages/Menu";
import Reservation from "../Pages/Reservation";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import Confirmation from "../Pages/Confirmation";

const Main = function () {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reservations" element={<Reservation />} />
      <Route path="/order" element={<Order />} />
      <Route path="/login" element={<Login />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}

export default Main;