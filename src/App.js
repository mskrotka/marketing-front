import React from 'react';
import ListWrapper from './components/ListWrapper';
import './index.css';

const initialStateItems = [{
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
    name: 'Dan Abramov',
    twitterLink: 'https://twitter.com/dan_abramov',
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
    name: 'Ryan Florence',
    description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
    twitterLink: 'https://twitter.com/ryanflorence',
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
    name: 'Michael Jackson',
    description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
    twitterLink: 'https://twitter.com/mjackson',
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Malevich.black-square.jpg/606px-Malevich.black-square.jpg',
    name: 'Kent C. Dodds',
    description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
    twitterLink: 'https://twitter.com/kentcdodds',
},]

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    }

    addItem = (event) => {
        event.preventDefault();

        const newItem = {
            name: event.target[0].value,
            twitterLink: event.target[1].value,
            image: event.target[2].value,
            description:event.target[3].value,
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));

        event.target.reset();
    }

    render() {
        return (
            <div>
                <ListWrapper
                    items={this.state.items}
                />

            </div>
        )
    }
};

export default App;
