import User from './User';
import Admin from './Admin';
import { useState } from 'react';

function App() {
    const [isAdmin, setIsAdmin] = useState(false);
    let mode;

    if (!isAdmin) {
        mode = <User />;
    } else {
        mode = <Admin />;
    }

    return <>{mode}</>;
}

export default App;
