import { Fragment } from 'react'

export default function StaticPage() {
    return (
        <Fragment>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </Fragment>
    )
}

function Header() {
    return (
        <Fragment>
            <header>
            <img  src="/src/assets/react-logo.png" alt="react photo" width={120} className='photo' />
            <nav className='header__nav'>
                <ul className="header__nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                    <li className='nav-list-item' id='Theme'>Theme</li>
                </ul>
            </nav>
            </header>
        </Fragment>
    )
}

function Main() {
    return (
        <Fragment>
            <main>
                <h1>Fun facts about React</h1>
                <div className='main__div'>
                    <ul className='ul__body'>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100k stars on GitHub</li>
                        <li>Is maintained by Meta</li>
                        <li>Power thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>
            </main>
        </Fragment>
    )
}

function Footer() {
    return (
        <Fragment>
            <footer>© 2024 XCTICoN development. All rights reserved.</footer>
        </Fragment>
    )
}