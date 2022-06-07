import { NavBar } from './pages/NavBar';
import MyBooks from './pages/MyBooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

    return (
        <Router>
            <div>
                <NavBar />
                <div>
                    <Routes>
                        <Route path='/' element={<MyBooks />} />
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;