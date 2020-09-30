export const bestseller = (getBestseller) => {
  fetch(`${process.env.REACT_APP_API_URL}/top-sales`, {
    method: "GET",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((result) => {
      getBestseller(result);
    })
    .catch((error) => {
      getBestseller(false, true);
    });
};
