export default defineEventHandler(async (event) => {
  // handle query parameters
  // const { name } = getQuery(event);

  // handle Post request Data
  // const { age } = await readBody(event);

  // return {
  //   message: `About api name parameter, ${name} and ${age} Year old`,
  // };

  // Api Call with privatekey
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=NTawBiKkOlJ2d7imbkkvfZaPnXAPdGxP4twEO2Jr"
  );

  return data;
});
