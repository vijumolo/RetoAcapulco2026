import React, { useState, useMemo } from 'react';
import resultsData from './data/results.json';
import type { AthleteResult } from './types';
import { AthleteCard } from './components/AthleteCard';
import { Filters } from './components/Filters';

const ITEMS_PER_PAGE = 30;

function App() {
  const [placa, setPlaca] = useState('');
  const [nombre, setNombre] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [pais, setPais] = useState('');
  const [page, setPage] = useState(1);

  // Type assertions
  const data: AthleteResult[] = resultsData as AthleteResult[];

  const filteredData = useMemo(() => {
    return data.filter((athlete) => {
      const matchPlaca = athlete.placa.toLowerCase().includes(placa.toLowerCase());
      const matchNombre = athlete.nombre.toLowerCase().includes(nombre.toLowerCase());
      const matchCiudad = (athlete.ciudad || '').toLowerCase().includes(ciudad.toLowerCase());
      // Since 'pais' currently defaults to N/A if it wasn't textual, we check if filtering is needed.
      const matchPais = (athlete.pais || '').toLowerCase().includes(pais.toLowerCase());

      return matchPlaca && matchNombre && matchCiudad && matchPais;
    });
  }, [data, placa, nombre, ciudad, pais]);

  // Reset page to 1 when filters change
  useMemo(() => {
    setPage(1);
  }, [placa, nombre, ciudad, pais]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentData = filteredData.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="container">
      <header className="header">
        <img src="/TCTJaguar.png" alt="TCT Jaguar Logo" className="header-logo" />
        <h1>Resultados Reto Acapulco</h1>
        <p>Running Bucaramanga 2026 - Consulta registro por registro</p>
      </header>

      <Filters 
        filtroPlaca={placa} setFiltroPlaca={setPlaca}
        filtroNombre={nombre} setFiltroNombre={setNombre}
        filtroCiudad={ciudad} setFiltroCiudad={setCiudad}
        filtroPais={pais} setFiltroPais={setPais}
      />

      <div className="results-info">
        <span>Mostrando {filteredData.length} resultados deportivos</span>
      </div>

      <div className="results-grid">
        {currentData.map((athlete, index) => (
          <AthleteCard key={`${athlete.placa}-${index}`} athlete={athlete} />
        ))}
      </div>

      {filteredData.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)' }}>
          <h2>No se encontraron resultados con los filtros actuales.</h2>
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="btn" 
            disabled={page === 1} 
            onClick={() => setPage(p => Math.max(1, p - 1))}
          >
            Anterior
          </button>
          <span>Página {page} de {totalPages}</span>
          <button 
            className="btn" 
            disabled={page === totalPages} 
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
