
import type { FC } from 'react';

interface FiltersProps {
  filtroPlaca: string;
  setFiltroPlaca: (v: string) => void;
  filtroNombre: string;
  setFiltroNombre: (v: string) => void;
  filtroCiudad: string;
  setFiltroCiudad: (v: string) => void;
  filtroPais: string;
  setFiltroPais: (v: string) => void;
  filtroCategoria: string;
  setFiltroCategoria: (v: string) => void;
  filtroGenero: string;
  setFiltroGenero: (v: string) => void;
}

export const Filters: FC<FiltersProps> = ({
  filtroPlaca, setFiltroPlaca,
  filtroNombre, setFiltroNombre,
  filtroCiudad, setFiltroCiudad,
  filtroPais, setFiltroPais,
  filtroCategoria, setFiltroCategoria,
  filtroGenero, setFiltroGenero
}) => {
  return (
    <div className="filters-container glass">
      <div className="input-group">
        <label>Placa (#)</label>
        <input 
          type="text" 
          placeholder="Ej. 642"
          value={filtroPlaca}
          onChange={(e) => setFiltroPlaca(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Nombre</label>
        <input 
          type="text" 
          placeholder="Ej. Carlos"
          value={filtroNombre}
          onChange={(e) => setFiltroNombre(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Ciudad</label>
        <input 
          type="text" 
          placeholder="Ej. Bucaramanga"
          value={filtroCiudad}
          onChange={(e) => setFiltroCiudad(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>País</label>
        <input 
          type="text" 
          placeholder="Ej. Colombia"
          value={filtroPais}
          onChange={(e) => setFiltroPais(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Categoría</label>
        <select 
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="16 K ABIERTA">16 K ABIERTA</option>
          <option value="16 K MASTER A">16 K MASTER A</option>
          <option value="16 K MASTER B">16 K MASTER B</option>
          <option value="7 K ABIERTA">7 K ABIERTA</option>
        </select>
      </div>
      <div className="input-group">
        <label>Género</label>
        <select 
          value={filtroGenero}
          onChange={(e) => setFiltroGenero(e.target.value)}
        >
          <option value="">Ambos géneros</option>
          <option value="Hombres">Hombres</option>
          <option value="Damas">Damas</option>
        </select>
      </div>
    </div>
  );
};
