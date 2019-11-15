var category = document.getElementById('category');
window.addEventListener('load',function(){
    var cities = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", 
    "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", 
    "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", 
    "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable",
    "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", 
    "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder",
     "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", 
     "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", 
     "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte",
      "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County",
       "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", 
       "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", 
       "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", 
       "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", 
       "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", 
       "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", 
       "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", 
       "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont",
        "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", 
        "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay",
         "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen",
          "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", 
          "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma",
           "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence",
            "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", 
            "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", 
            "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee","Karachi",
             "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster",
              "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", 
              "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles",
               "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", 
               "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced",
                "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo",
                 "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", 
                 "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples",
                 "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", 
                 "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", 
                 "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk",
                  "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", 
                  "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando",
                   "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", 
                   "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola",
                    "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona",
                     "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie",
                      "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence",
                       "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga",
                        "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", 
                        "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville"
                        , "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul",
                         "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", 
                         "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", 
                         "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", 
                         "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside",
                          "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend",
                           "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", 
                           "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale",
                            "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", 
                            "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton"
                            , "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo",
                             "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia"
                             , "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", 
                             "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", 
                             "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
        for (var i=0;  i<cities.length; i++) {
            let opt = document.createElement("option");
            opt.value = cities[i];
            opt.text = cities[i];
            category.appendChild(opt);
      }
});

const cityform = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const updateUI = (data)=>{
    //   const citydetails = data.cityDets;
    //   const weather  = data.weather;
      const {cityDets,weather} = data;

      details.innerHTML = `
                <h5 class="my-3">${cityDets.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                </div>
      `;
        let timesrc = weather.IsDayTime? 'img/day.svg':'img/night.svg';
        time.setAttribute('src',timesrc);
        let iconsrc = `img/icons/${weather.WeatherIcon}.svg `;
        icon.setAttribute('src',iconsrc);
      if(card.classList.contains('d-none'))
      {
          card.classList.remove('d-none');
      }
}
const updatecity = async (city) => {
      const cityDets = await getcities(city);
      const weather = await getweather(cityDets.Key);

      return {
          cityDets, weather};
}
cityform.addEventListener('submit', e => {
    e.preventDefault();
        //get cities      
        var city  = cityform.city.value.trim();
        updatecity(city).then(data => updateUI(data)).catch(err => console.log(err));
        cityform.reset();
               
        localStorage.setItem('city',city);
});
category.addEventListener('change',function(){
    var text = document.getElementById("category").value.trim();
    if(text != null){
    updatecity(text).then(data => updateUI(data)).catch(err => console.log(err));
    //cityform.reset();
    localStorage.setItem('city',text);
    }
    
});

if(localStorage.getItem('city')){
    updatecity(localStorage.getItem('city')).then(data => updateUI(data)).catch(err => console.log(err));
}
