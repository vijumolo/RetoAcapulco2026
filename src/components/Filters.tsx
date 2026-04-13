
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
}

export const Filters: FC<FiltersProps> = ({
  filtroPlaca, setFiltroPlaca,
  filtroNombre, setFiltroNombre,
  filtroCiudad, setFiltroCiudad,
  filtroPais, setFiltroPais
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
    </div>
  );
};
