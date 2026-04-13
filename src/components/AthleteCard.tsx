import type { FC } from 'react';
import type { AthleteResult } from '../types';

interface AthleteCardProps {
  athlete: AthleteResult;
}

export const AthleteCard: FC<AthleteCardProps> = ({ athlete }) => {
  return (
    <div className="athlete-card glass">
      <div className="card-header">
        <span className="puesto-badge">#{athlete.puesto.replace('.', '')}</span>
        <span className="placa-badge">Placa: {athlete.placa}</span>
      </div>
      
      <h3 className="athlete-name">{athlete.nombre}</h3>
      
      <div className="athlete-meta">
        <div className="meta-item">
          <span>📍</span> {athlete.ciudad || 'No Registra'}
        </div>
        <div className="meta-item">
          <span>{athlete.genero === 'Hombres' ? '🏃‍♂️' : '🏃‍♀️'}</span> {athlete.categoria}
        </div>
      </div>
      
      <div className="card-stats">
        <div className="stat">
          <span className="stat-label">Tiempo Oficial</span>
          <span className="stat-value highlight">{athlete.tiempo}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Diferencia</span>
          <span className="stat-value">{athlete.dif === '--' ? '00:00' : athlete.dif}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Velocidad Prom.</span>
          <span className="stat-value">{athlete.vel}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Ritmo</span>
          <span className="stat-value">{athlete.ritmo}</span>
        </div>
      </div>
    </div>
  );
};
