import '../styles/NewsList.css';

const NewsList = () => {
  // Temporal: ejemplo de noticias
  const noticias = [
    { id: 1, titulo: "Festejos Patronales", contenido: "La ciudad se prepara para sus fiestas patronales..." },
    { id: 2, titulo: "Obras en curso", contenido: "Se están realizando mejoras en la avenida central..." },
  ];

  return (
    <div>
      <h2>Últimas Noticias</h2>
      {noticias.map((noticia) => (
        <div key={noticia.id} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{noticia.titulo}</h5>
            <p className="card-text">{noticia.contenido}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
