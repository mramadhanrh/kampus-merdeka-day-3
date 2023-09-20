import { productList } from "../constants/products.js";

export const getAll = (_, response) => {
  try {
    response.json({
      data: productList,
      message: "Successfully retrieved data!",
    });
  } catch (error) {
    response.status(500);
    response.json({
      message: "Internal server error!",
    });
  }
};

export const getById = (request, response) => {
  try {
    const { id } = request.params;
    const product = productList[Number(id) - 1];
    if (!product) {
      response.status(404);
      response.json({
        message: "Data not found",
      });
    }

    response.json({
      data: product,
      message: "Successfully retreive data!",
    });
  } catch (error) {
    response.status(500);
    response.json({
      message: "Internal server error!",
    });
  }
};

export const post = () => {};
