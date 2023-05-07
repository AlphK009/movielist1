class DataSource {
  static searchMovie(keyword) {
    const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key='
    const apiKey = '83176d776684b10c65c306d95f56830f'
    return fetch(`${baseUrl}${apiKey}&query=${keyword}`)
    .then(response=>{
      return response.json();
    })
    .then(responseJson=>{
      if(responseJson){
        return Promise.resolve(responseJson);
      } else{
        return Promise.reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;