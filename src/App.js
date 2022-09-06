import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import api from "./services/api";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cidadesp, setcidadesp] = useState("");
  const [cidaderj, setcidaderj] = useState("");
  const [cidadebh, setcidadebh] = useState("");

  useEffect(() => {
    async function buscarClimasp() {
      const resposta = await api.get(
        "forecast.json?key=d893fb7b72464d7688d124905220209&q=sao%20paulo&days=1&aqi=no&alerts=no"
      );
      const climasp = resposta.data;
      console.log(climasp);
      setcidadesp(
        <Card
          img={climasp.current.condition.icon}
          temp={climasp.current.temp_c}
          local="São Paulo"
          temp_max="assets/pra-cima.png"
          temp_min="assets/seta.png"
          min={climasp.forecast.forecastday[0].day.mintemp_c}
          max={climasp.forecast.forecastday[0].day.maxtemp_c}
          umidade={climasp.current.humidity}
          uv={climasp.current.uv}
          sesacao={climasp.current.feelslike_c}
        />
      );
    }
    async function buscarClimarj() {
      const resposta = await api.get(
        "forecast.json?key=d893fb7b72464d7688d124905220209&q=rio%20de%20janeiro&days=1&aqi=no&alerts=no"
      );
      const climarj = resposta.data;
      setcidaderj(
        <Card
          img={climarj.current.condition.icon}
          temp={climarj.current.temp_c}
          local="Rio de Janeiro"
          temp_max="assets/pra-cima.png"
          temp_min="assets/seta.png"
          min={climarj.forecast.forecastday[0].day.mintemp_c}
          max={climarj.forecast.forecastday[0].day.maxtemp_c}
          umidade={climarj.current.humidity}
          uv={climarj.current.uv}
          sesacao={climarj.current.feelslike_c}
        />
      );
    }
    async function buscarClimabh() {
      const resposta = await api.get(
        "forecast.json?key=d893fb7b72464d7688d124905220209&q=Belo%20Horizonte&days=1&aqi=no&alerts=no"
      );
      const climabh = resposta.data;
      setcidadebh(
        <Card
          img={climabh.current.condition.icon}
          temp={climabh.current.temp_c}
          local="Belo Horizonte"
          temp_max="assets/pra-cima.png"
          temp_min="assets/seta.png"
          min={climabh.forecast.forecastday[0].day.mintemp_c}
          max={climabh.forecast.forecastday[0].day.maxtemp_c}
          umidade={climabh.current.humidity}
          uv={climabh.current.uv}
          sesacao={climabh.current.feelslike_c}
        />
      );
    }
    buscarClimasp();
    buscarClimarj();
    buscarClimabh();
  }, []);

  return (
    <>
      <Header />
      <section className="content">
        {cidadesp}
        {cidaderj}
        {cidadebh}
      </section>
      <Footer />
    </>
  );
}

export default App;
