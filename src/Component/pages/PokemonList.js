import { useParams } from "react-router-dom";
import useFetch from "../useFetch";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const pokemonList = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
  ];
  

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
  });


const PokemonList = () => {
    
    const { id } = useParams();
    const [ pokemons, , isError ] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=9' + id );
    
    const classes = useStyles();

    
    return (
        <div className="pokemons">
        {pokemons.map((pokemon, index) => (
          <Card className={classes.root} key={pokemon.name}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={pokemonList[index]}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pokemon.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
      );
}
 
export default PokemonList;