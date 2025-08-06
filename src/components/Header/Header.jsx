import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h1>So Boas</h1>
                    <span>Apenas notícias boas</span>
                </div>
                <nav className="nav">
                    <a href="" className="nav-link">Início</a>
                    <a href="" className="nav-link">Quem Somos</a>
                    <a href="" className="nav-link">Política de Privacidade</a>
                </nav>

                <div className="header-action">
                    <button>
                        Assine nossa NewsLetter
                    </button>
                </div>
            </div>
        </header>
    )
}