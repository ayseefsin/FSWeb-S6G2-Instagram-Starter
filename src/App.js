/* 
  Buradan başlayın ve iç içe geçmiş bileşenlere doğru ilerleyin.
  Projedeki tüm dosyalara kod eklenmesi gerekmez.
  Nerelerde değişiklik yapmanız gerektiğini anlamak için her dosyayı inceleyin.
*/

// State hook u import edin
import React, { useState } from "react";

// Gönderiler (çoğul!) ve AramaÇubuğu bileşenlerini import edin, çünkü bunlar App bileşeni içinde kullanılacak
// sahteVeri'yi import edin
import AramaCubugu from "./bilesenler/AramaCubugu/AramaCubugu";
import Gönderiler from "./bilesenler/Gonderiler/Gonderiler";
import "./App.css";
import sahteveri from "./sahte-veri";

const App = () => {
  const [gonderiler, setGonderiler] = useState(sahteveri);

  const [aramaKriteri, setAramaKriteri] = useState("");

  const gonderiyiBegen = (gonderiID) => {
    const yeniGonderiler = gonderiler.map((gonderi) => {
      if (gonderi.id === gonderiID) {
        return { ...gonderi, likes: gonderi.likes + 1 };
      } else {
        return gonderi;
      }
    });
    setGonderiler(yeniGonderiler);
  };

  return (
    <div className="App">
      App Çalışıyor
      <AramaCubugu kelime={aramaKriteri} ara={setAramaKriteri} />
      <Gönderiler gonderiyiBegen={gonderiyiBegen} gonderiler={gonderiler} />
    </div>
  );
};

export default App;
