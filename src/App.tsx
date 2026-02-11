import { Card } from './components/Card'
import './App.css'
import Examples from './components/ExampleFlexbox';
import Avatar from './components/Avatar';
function App() {
    return (
        <div>
            <Card title='Teste'>
                <h1>olá</h1>
            </Card>

            <Examples />
            <Avatar name='Infnet'/>
            <Avatar name='Infnet' imageUrl='https://cdn-icons-png.flaticon.com/512/6858/6858504.png'/>
            <Avatar name='Infnet' imageUrl='https://cdn-icons-png.flaticon.com/512/6858/6858504.png'/>

            <Card title='Teste'>
                <Avatar name='Fulano' />
                <h1>olá</h1>
            </Card>
        </div>
    );
}

export default App;