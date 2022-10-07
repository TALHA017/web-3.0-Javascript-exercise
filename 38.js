
city_names =['Kharachi','Lahore','Islamabad','Makkah'];
var country ="Pakistan";


shirtSize = ''

function describe_city(city_name,country){

    if(city_name == 'Makkah'){
        return `${city_name} is not in  ${country}`;
    }else {
        return `${city_name} is in  ${country}`;
    }

}
console.log("Q38 = T-Shirt size and Message Function:")
city_names.forEach((city) =>{
  console.log(describe_city(city,country))
});
