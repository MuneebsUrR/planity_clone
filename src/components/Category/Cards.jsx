import * as React from 'react';
import { Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Cards({ data }) {
  const { type } = useParams();

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }
  };

  return (
    <motion.div
      className="container mx-auto flex flex-wrap justify-center items-center gap-10"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
    >
      {data.map((item, index) => (
        <motion.div
          key={`${type}-${index}`}  // Ensures animation triggers on type change
          variants={cardVariants}
        >
          <Link to={`/category/${type}/${item.id}`}>
            <Card sx={{ maxWidth: '100%', width: '350px', marginTop: '20px' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.image || "https://picsum.photos/200"}
                  alt={item.name}
                  className="object-cover h-48"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" className="text-sm">
                    Découvrez nos
                  </Typography>
                  <Typography variant="h7" component="h2" className="text-lg font-semibold">
                    {type} à Location...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
