export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>So Boas</h4>
                <p>Sua fonte confiável para notícias sustentáveis e conscientes. Informação que faz a diferença para um mundo melhor.</p>
                <div>
                    <a href="">📘</a>
                    <a href="">🐦</a>
                    <a href="">📸</a>
                    <a href="">💼</a>
                </div>
            </div>

            <div className="footer-section">
                <h4>Categorias</h4>
                <ul>
                    <li>
                        <a href="">Mundo</a>
                        <a href="">Saúde</a>
                        <a href="">Educação</a>
                        <a href="">Tecnologia</a>
                    </li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Sobre</h4>
                <ul>
                    <li>
                        <a href="">Nossa Missão</a>
                        <a href="">Equipe</a>
                        <a href="">Contato</a>
                        <a href="">Política de Privacidade</a>
                    </li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Newsletter</h4>
                <p>Receba as últimas notícias diretamente no seu e-mail.</p>

                <div>
                    <input type="text" placeholder="Seu e-mail" />
                    <button>Inscrever</button>
                </div>
            </div>
        </footer>
    )
}