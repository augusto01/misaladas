import '../../styles/Ubicacion.css';

const Ubicacion = () => {
  return (
    <section className="ubicacion-container">
      <div className="ubicacion-header">
        <h2>Ubicación</h2>
        <p>Saladas, Corrientes – Argentina</p>
      </div>

      <div className="ubicacion-content">
        <div className="ubicacion-text">
          <p>
            Saladas es una ciudad situada en el centro-norte de la provincia de Corrientes, reconocida por su rica historia, su rol en la independencia argentina y su gente cálida. Rodeada de paisajes naturales, tradiciones vivas y cultura autóctona, Saladas invita a descubrir la esencia del litoral.
          </p>
          <p>
            Es un destino ideal para quienes buscan tranquilidad, turismo histórico y la calidez de una comunidad con identidad propia.
          </p>
        </div>

        <div className="ubicacion-mapa">
          <iframe
            title="Mapa de Saladas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.263759015027!2d-58.62126728501704!3d-28.252879509688556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944d92f2275e1179%3A0xf55f057d3bc3e60d!2sSaladas%2C%20Corrientes!5e0!3m2!1ses!2sar!4v1699647847983!5m2!1ses!2sar"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;
