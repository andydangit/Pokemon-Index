import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import "./PokemonList.css";
import ash from '../../img/ash_pikachu.png'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

 
const useStyles = makeStyles({
    root: {
      maxWidth: 320,
    },
    media: {
      height: 250,
      width: 210,
    },
  });


const PokemonList = () => {

        const classes = useStyles();
    
    return (
        <div className="pokemons">
          <Card className="enter">
            <CardActionArea href="">
              <CardMedia
                className={classes.media}
                image={ash}
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