import '../../styles/NoticiaDetalle.css';

const NoticiaDetalle = () => {
  const noticia = {
    titulo: "Festejos Patronales en Saladas",
    contenido: `La ciudad de Saladas se viste de fiesta para honrar a su santo patrono, San Roque. Con actividades religiosas, culturales y recreativas, los festejos reúnen a toda la comunidad en un evento cargado de emoción, fe y tradición. La plaza central se convierte en el epicentro de conciertos, danzas folclóricas y ferias gastronómicas que atraen tanto a locales como a turistas.

    Las celebraciones también incluyen una procesión multitudinaria, misas especiales y exposiciones de artesanos locales. Esta festividad no solo fortalece la identidad de la ciudad, sino que también promueve el turismo y el encuentro de generaciones.

    Sin duda, los Festejos Patronales en Saladas son una experiencia que combina cultura, devoción y alegría en cada rincón del pueblo.`,
    fecha: "15 de julio de 2025",
    autor: "Municipalidad de Saladas",
    imagen: "/img/corsos1.webp ",
  };

  return (
    <div className="noticia-detalle container py-5">
      <h2 className="titulo">{noticia.titulo}</h2>
      <p className="meta">
        Publicado el {noticia.fecha} por <span>{noticia.autor}</span>
      </p>
      <img src={noticia.imagen} alt={noticia.titulo} className="imagen-principal mb-4" />
      <p className="contenido">{noticia.contenido}</p>
    </div>
  );
};

export default NoticiaDetalle;
