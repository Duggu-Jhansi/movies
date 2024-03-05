export default defineEventHandler(async () => {
    const { movieKey } = useRuntimeConfig()
    try {
      const data = await $fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d34dae977f277ae4f9fcee0d676dfc5e`)
      // console.log(data)
      return data
    } catch (error) {
      console.error(error);
      return null;
    }
  })