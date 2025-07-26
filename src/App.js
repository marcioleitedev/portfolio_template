import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <header className="hero" data-aos="fade-down">
        <img src="profile.png" alt="Seu Nome" className="profile-pic" />
        <h1>Seu Nome</h1>
        <p>Desenvolvedor Front-end | React | JavaScript</p>
      </header>

      <section className="about" data-aos="fade-right">
        <h2>Sobre Mim</h2>
        <p>
          Sou um desenvolvedor apaixonado por criar aplicações web com foco em
          desempenho, responsividade e usabilidade.
        </p>
      </section>

      <section className="projects" data-aos="fade-left">
        <h2>Projetos</h2>
        <ul>
          <li>
            <strong>Projeto 1:</strong> Portfólio pessoal com React
          </li>
          <li>
            <strong>Projeto 2:</strong> Sistema de blog com Firebase
          </li>
        </ul>
      </section>

      <section className="contact" data-aos="zoom-in">
        <h2>Contato</h2>
        <p>Email: seuemail@email.com</p>
        <p>LinkedIn: linkedin.com/in/seunome</p>
      </section>

      <footer className="footer" data-aos="fade-up">
        <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App; 
