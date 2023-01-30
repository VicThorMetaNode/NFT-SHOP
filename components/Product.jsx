import React from "react";
import Link from "next/link";
//IMPORT MOTION
// import { motion } from "framer-motion";
//IMPORT MOTION COMPONENTS
// import { staggerContainer, slideIn } from "../utils/motion";
//Import IMAGES from client
import { urlFor } from "../lib/client";

// IMPORT CHAKRA tools
import { Box, Stack } from "@chakra-ui/react";

const Product = ({ product: { image, slug } }) => {
  return (
    <>
      <Box>
        <Link href={`/product/${slug.current}`}>
          <Box className="product-card">
            <Stack direction="column">
              <Box
                w={["10.2rem", "15rem", "20rem"]}
                h={["10.2rem", "15rem", "20rem"]}
              >
                <img
                  src={urlFor(image && image[0])}
                  alt="Product Image"
                  className="product-image"
                />
              </Box>
            </Stack>
          </Box>
        </Link>
      </Box>
    </>
  );
};

export default Product;
