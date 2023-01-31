
export default function buildFiltersURL(min_rating, max_rating, from, to, genres){
    let url = "/movies";
    let alreadyHasParams= false
    if (!(max_rating === 5 & min_rating === 0)){
        url = url + "/?minrating=" + min_rating + "&max_rating=" + max_rating;
        alreadyHasParams = true
    }
    if (!(from === 1800 & to === 2023)){
        if (!alreadyHasParams){
            url = url + "/?"
            alreadyHasParams = true
        }
        else{
            url = url + '&'
        }
        url = url + "from=" + from + "&to=" + to;
    }
    if (!(genres === [])){
        if(!(alreadyHasParams)){
            url = url + '/?'
        }
        else{
            url = url + '&'
        }
        url = url + "genres=[" 
        
        genres.map((genre) => ( 
            url = url + genre.id + ","
        ))
        
        
        url = url.slice(0,-1) + "]";
    }
    return url;

}
