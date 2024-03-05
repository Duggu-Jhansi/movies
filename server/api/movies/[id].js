export default defineEventHandler(async (event) => {
    const { movieKey } = useRuntimeConfig()
    const movieid = event.context.params.id
    try {
      const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=d34dae977f277ae4f9fcee0d676dfc5e&language=en-US`)
      // console.log(data)
      return data
    } catch (error) {
      console.error(error);
      return null;
    }
  })