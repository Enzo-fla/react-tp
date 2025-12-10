import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import useFetch from '../hooks/useFetch.js';

function Bitcoin() {
  const { data, loading, error } = useFetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=7');

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!data || !data.prices) return;

    const labels = data.prices.map(item => {
      const date = new Date(item[0]);
      return `${date.getDate()}/${date.getMonth()+1}`;
    });
    const prices = data.prices.map(item => item[1]);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Bitcoin (€)',
          data: prices,
          fill: true,
          backgroundColor: 'rgba(106, 0, 218, 0.2)',
          borderColor: 'rgba(106, 0, 218, 1)',
          tension: 0.3
        }
      ]
    });
  }, [data]);

  if (loading) return <p>Chargement du Bitcoin...</p>;
  if (error) return <p>Erreur: {error}</p>;
  if (!chartData) return <p>Pas de données</p>;

  return (
    <div>
      <h2 style={{ color: '#6a0dad' }}>Bitcoin - Derniers 7 jours</h2>
      <Line data={chartData} options={{
        responsive: true,
        plugins: {
          legend: { labels: { color: '#6a0dad' } }
        },
        scales: {
          x: { ticks: { color: '#6a0dad' } },
          y: { ticks: { color: '#6a0dad' } }
        }
      }} />
    </div>
  );
}

export default Bitcoin;
