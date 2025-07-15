import '../../styles/Ubicacion.css';
import Carrusel from '../../components/pages/Carrusel';

const Ubicacion = () => {
  return (
    <section className="ubicacion-container">
      <div className="ubicacion-header">
        <h2>Visitá Saladas</h2>
        <p>Saladas, Corrientes – Argentina</p>
      </div>

      <div className="ubicacion-content">
        <div className="ubicacion-text">
          <p>
            Saladas es una ciudad situada en el centro-norte de la provincia de Corrientes, reconocida por su rica historia, su rol fundamental en la independencia argentina y la calidez de su gente. Rodeada de hermosos paisajes naturales y tradiciones vivas, esta ciudad invita a descubrir la esencia del litoral argentino.
          </p>

          {/* Fiesta de la Miel */}
          <p>
            Entre sus mayores atractivos se destaca la <strong>Fiesta Provincial de la Miel y Expo Saladas</strong>, un evento emblemático donde productores locales exhiben la riqueza y calidad de la miel, producto estrella de la región. Este evento no solo celebra la producción apícola sino que también fomenta la cultura, la gastronomía y el turismo regional.
          </p>

          
          <p>
            Las <strong>Fiestas Patronales</strong> son otro punto destacado en el calendario cultural saladeño. La comunidad se reúne para celebrar con devoción, procesiones, música y ferias locales en honor a San Roque, el santo patrono.
          </p>

          <Carrusel
            images={[
              { src: '/img/patronales1.webp', alt: 'Procesión religiosa' },
              { src: '/img/patronales2.webp', alt: 'Celebración en la iglesia' },
              { src: '/img/patronales3.webp', alt: 'Público congregado' },
            ]}
          />

          {/* Monumento a Cabral */}
          <p>
            La historia de Saladas también está marcada por la figura del <strong>Sargento Juan Bautista Cabral</strong>, héroe nacional reconocido por su valentía en la Guerra de la Independencia. Su legado es honrado en monumentos y espacios públicos que rememoran su entrega y patriotismo.
          </p>

          <img
            src="/img/monumento.jpg"
            alt="Monumento al Sargento Cabral"
            className="ubicacion-img"
          />

          

          {/* Corsos */}
          <p>
            Los <strong>Carnavales de Saladas</strong> son una tradición vibrante que anima a locales y turistas con desfiles coloridos, música y bailes típicos que reflejan la identidad cultural de la región.
          </p>

          <Carrusel
            images={[
              { src: '/img/corso1.png', alt: 'Stand de miel' },
              { src: '/img/corso3.png', alt: 'Productores locales' },
              { src: '/img/corso4.png', alt: 'Visitantes en la expo' },
              { src: '/img/corso5.png', alt: 'Visitantes en la expo' },
              { src: '/img/corso6.png', alt: 'Visitantes en la expo' },
            ]}
          />

          {/* Costanera */}
          <p>
            La <strong>costanera saladeña</strong> es un espacio ideal para el paseo, el descanso y la contemplación del paisaje natural. Es un lugar perfecto para disfrutar en familia, practicar deportes o simplemente admirar el atardecer.
          </p>

          <Carrusel
            images={[
              { src: '/img/costanera1.webp', alt: 'Vista de la costanera' },
              { src: '/img/costanera2.webp', alt: 'Paseo costero' },
              { src: '/img/costanera3.webp', alt: 'Atardecer' },
            ]}
          />

          {/* Iglesia y plaza */}
          <p>
            Otros puntos turísticos incluyen la <strong>Iglesia San Roque</strong> y la <strong>Plaza Central</strong>, íconos históricos que conservan la arquitectura colonial y son centros de vida comunitaria.
          </p>

          <div className="img-row">
            <img
              src="/img/iglesia.jpg"
              alt="Iglesia San Roque"
              className="ubicacion-img pequeño"
            />
            <img
              src="/img/plaza.jpg"
              alt="Plaza Central"
              className="ubicacion-img pequeño"
            />
          </div>

          {/* Deportes */}
          <p>
            En el ámbito deportivo, Saladas se destaca por su pasión por el <strong>fútbol</strong> y el <strong>básquetbol</strong>. Diversos clubes y escuelas deportivas brindan espacios de formación y competencia que fortalecen el espíritu comunitario.
          </p>
        </div>

        <div className="ubicacion-mapa">
          <h3 className='text-center'> ¡ Aqui te esperamos !</h3>
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
