import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { categories } from "../shared/Questions";
import { useRecoilValue } from "recoil";
import { modeAtom } from "../recoil/atoms/modeAtom";

const Home = () => {
  const mode = useRecoilValue(modeAtom);
  return (
    // <Card variant="outlined">
    //   <CardContent>
    <Box>
      <Typography variant="h5">{"Select Category to Play"}</Typography>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", marginBottom: "20px" }}
      >
        {categories.map((card, idx) => (
          <Grid type="item" size={6}>
            <Link
              key={idx}
              to={`/quiz/${card.name}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  textAlign: "center",
                  bgcolor: mode === "dark" ? "grey" : "white",
                  color: mode === "dark" ? "white" : "black",
                //   border: "solid",
                  borderColor: mode === "dark" ? "white" : "black",
                }}
              >
                <CardActionArea
                  // onClick={() => setSelectedCard(index)}
                  // data-active={selectedCard === index ? "" : undefined}
                  sx={{
                    height: "100%",
                    "&[data-active]": {
                      backgroundColor: "action.selected",
                      "&:hover": {
                        backgroundColor: "action.selectedHover",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ height: "100%" }}>
                    {card.icon}
                    <Typography variant="h5" component="div">
                      {card.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
    //   </CardContent>
    // </Card>
  );
};

export default Home;
