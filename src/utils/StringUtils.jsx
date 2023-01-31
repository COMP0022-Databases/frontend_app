
export default function buildFiltersURL(min_rating, max_rating, from, to){
    let url = "/movies";

    if (!(max_rating === 5 & min_rating === 0)){
        url = url + "/?minrating=" + min_rating + "&max_rating=" + max_rating;
        if (!(from === 1800 & to === 2023)){
            url = url + "&from=" + from + "&to=" + to;
        }
    }
    else if (!(from === 1800 & to === 2023)){
        url = url + "/?from=" + from + "&to=" + to;
    }
    return url;

}