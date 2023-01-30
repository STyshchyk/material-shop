import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";

const CardItem = (props) => {
    const {
        cardElem,
        cardDesk,
        cardTitle,
        cardPrice,
        getItem = Function.prototype
    } = props;
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card
                variant="elevation"
                sx={{
                    height: 400,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",

                }}>
                <CardMedia
                    component="img"
                    height="140"
                    width={"140px"}
                    image={cardElem.thumbnail}
                    alt={cardElem.title}
                    sx={{display: "block", objectFit: "contain", mb: 2}}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="body2"
                        component="span"
                        sx={{fontWeight:"700"}}
                       
                    >
                        {cardTitle}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{textOverflow: "ellipsis"}}
                    >
                        {cardDesk}
                    </Typography>

                </CardContent>

                <CardActions sx={{marginTop: "auto", alignSelf: "stretch"}}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{marginRight: "auto"}}
                    >
                        Price: {cardPrice} $
                    </Typography>
                    <Button
                        variant={"outlined"}
                        size="small"
                        onClick={() => getItem(cardElem)}
                    >Add to cart</Button>
                </CardActions>

            </Card>
        </Grid>
    );
};

export default CardItem;