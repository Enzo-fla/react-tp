import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch.js';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function Bitcoin() {
  const { data, loading, error } = useFetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=7&interval=daily');
  const [currentPrice, setCurrentPrice] = useState(null);

  // récupérer le prix actuel depuis une autre API
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur')
      .then(res => res.json())
      .then(json => setCurrentPrice(json.bitcoin.eur));
  }, []);

  if (loading) return <p>Chargement des données Bitcoin...</p>;
  if (error) return <p>Erreur: {error}</p>;

  const chartData = {
    labels: data.prices.map(item => new Date(item[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Prix Bitcoin (€)',
        data: data.prices.map(item => item[1]),
        borderColor: '#6a0dad',
        backgroundColor: 'rgba(106, 13, 173, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#6a0dad', marginBottom: '1rem' }}>Bitcoin</h2>

      {currentPrice && (
        <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#6a0dad' }}>
          Prix actuel : €{currentPrice.toLocaleString()}
        </div>
      )}

      <div style={{ maxWidth: '800px', marginBottom: '2rem' }}>
        <Line data={chartData} options={chartOptions} />
      </div>

      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', backgroundColor: '#f3f0f8' }}>
        <h3 style={{ color: '#6a0dad' }}>Infos supplémentaires</h3>
        <ul>
          <li>Volume d’échange sur 24h : 42 000 BTC (exemple fictif)</li>
          <li>Variation 24h : +3,2%</li>
          <li>Conseil : restez attentif aux fluctuations du marché</li>
        </ul>
      </div>
    </div>
  );
}

export default Bitcoin;
