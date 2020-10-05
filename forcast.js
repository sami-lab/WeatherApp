const key ='JV0DwN2RJq3xWslqSyVcGQTowGNLmG7S';

const getweather = async (id)=>{
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}
const getcities = async (city)=> {

   const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
   const query = `?apikey=${key}&q=${city}`;
   const response = await fetch(base+query);
   console.log(response);
   const data = await response.json();
   console.log(data[0]);
   return data[0];
}


// getcities('Karachi').then((data)=> {
//          return getweather(data.key);
// }).then((data)=>{
//     console.log(data);
// }).catch(err => console.log(err));
