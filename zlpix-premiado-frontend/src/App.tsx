import React, { useState, useEffect } from "react";

export default function App() {
  const [selected, setSelected] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [pixKey, setPixKey] = useState("");

  const numbers = Array.from({ length: 100 }, (_, i) => i);

  const toggleNumber = (num: number) => {
    if (confirmed || isGenerating) return;

    if (selected.includes(num)) {
      setSelected(selected.filter((n) => n !== num));
    } else if (selected.length < 3) {
      setSelected([...selected, num]);
    }
  };

  const generateAutomatic = () => {
    if (isGenerating || confirmed) return;
    setIsGenerating(true);
    setSelected([]);

    let steps = 0;
    const interval = setInterval(() => {
      const randomNumbers = Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * 100)
      );
      setSelected(randomNumbers);
      steps++;
      if (steps > 15) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 150);
  };

  const confirmTicket = () => {
    if (selected.length !== 3) {
      alert("Selecione ou gere 3 dezenas antes de confirmar!");
      return;
    }
    setConfirmed(true);
    const pix = "00020126580014BR.GOV.BCB.PIX0136pix.chave@exemplo.com520400005303986540512.345802BR5920ZLPix Premiado6009SAO PAULO62070503***6304ABCD";
    setPixKey(pix);
  };

  const resetGame = () => {
    setSelected([]);
    setConfirmed(false);
    setPixKey("");
  };

  // Efeito de moedas douradas
