import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import "./PokemonList.css";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

 
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
    const [ pokemons, , isError ] = useFetch('https://pokeapi.co/api/v2/pokemon?limit=1' + id );
    
    const classes = useStyles();

    
    return (
        <div className="pokemons">
          <Card className={classes.root} >
            <CardActionArea href="">
              <CardMedia
                className={classes.media}
                image="img\ash_pikachu.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Enter
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
      </div>
      );
}
 
export default PokemonList;