import './App.css';
import CardList from './Components/CardList';


function App() {
  const itemData = [
    {
      name: "Bright",
      poster:"https://wallpapercave.com/wp/wp2354003.jpg",
      img: 'https://i0.wp.com/www.ourmovielife.com/wp-content/uploads/2017/12/Bright-movie-banner.jpg?fit=1280%2C640&ssl=1',
      title: 'Collection',
      about: 'Most Popular around the World',
      featured: true,
      year:2017,
      actor_name:"David Ayer",
      time:"117 min",
      text:"A detective must work with an Orc to find a powerful wand before evil creatures do."

    },
    {
      name: "Tomb Raider",
      poster:"https://m.media-amazon.com/images/M/MV5BOTY4NDcyZGQtYmVlNy00ODgwLTljYTMtYzQ2OTE3NDhjODMwXkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_.jpg",
      img: 'https://c4.wallpaperflare.com/wallpaper/532/570/514/movie-tomb-raider-2018-alicia-vikander-lara-croft-wallpaper-preview.jpg',
      title: 'Collection',
      about: 'Great for team building',
      year:2017,
      actor_name:"Alicia Vikander",
      time:"117 min",
      text:"Lara Croft (Alicia Vikander), must push herself beyond her limits when she discovers the island where her father, Lord Richard Croft disappeared."

    },
    {
      name: "Avengers",
      poster:"http://static.hd-trailers.net/images/AVG-Payoff-1-Sht-v13-jpg_050023.jpg",
      img: 'https://wallpapercave.com/wp/wp2547005.jpg',
      title: 'Collection',
      about: 'Fun for the family',
      year:2017,
      actor_name:"Robert Downey Jr",
      time:"117 min",
      text: "Earth's mightiest heroes must come together and learn to fight as a team the mischievous Loki and his alien army from enslaving humanity."

    }
  ];

  return (
    <div className="App">
      <CardList data={itemData} />

    </div>
  );
}

export default App;