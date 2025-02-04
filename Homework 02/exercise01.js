fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);

    //All beauty products, ordered by price descending
    const descendingProducts = data.products.sort(
      (a, b) => b.products - a.products
    );
    console.log(descendingProducts);

    //All the products that have stock more than 50
    const stock = descendingProducts.filter((user) => user.stock > 50);
    console.log(stock);

    //All products that have a lifetime warranty and rating of 5
    const productsWithLifetimeWarrantyAndRating5 = descendingProducts.filter((user) => user.warrantyInformation.toLowerCase() === "lifetime"  && user.review.rating === 5);
    console.log(productsWithLifetimeWarrantyAndRating5);


    //The average rating of all products in category "furniture"
    const categoryFurniture = descendingProducts.filter(
      (user) => user.category === "furniture"
    );
    console.log(categoryFurniture);

    const averageRating =
      categoryFurniture.reduce((acc, user) => acc + user.rating, 0) /
      categoryFurniture.length;

    console.log(averageRating);

    //The name of the highest rated beauty product

    const beautyProduct = descendingProducts.filter(
      (user) => user.category === "beauty"
    );
    console.log(beautyProduct);

    const highestRated = beautyProduct.reduce((highest, product) => {
      return product.rating > highest.rating ? product : highest;
    });
    console.log(highestRated);

    //Find the product with the highest price

    const highestPrice = descendingProducts.reduce((highest, user) => {
      return user.price > highest.price ? user : highest;
    });

    console.log(highestPrice);

    //Calculate the average rating from the reviews of products with id 22

    const reviews = descendingProducts
      .filter((user) => user.id === 22)
      .flatMap((user) => user.reviews);

    const avgRating =
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

    console.log(avgRating);

    //Return the title and description of all products that have discounted percentage above 10
    const discountedProducts = descendingProducts
      .filter((user) => user.discountPercentage > 10)
      .map((user) => ({
        title: user.title,
        description: user.description,
      }));

    console.log(discountedProducts);
  })
  .catch((error) => console.error(error));
