

export function getDateFilter(queryParams){
    // If the parameter is specified then return it else put the default value
    if (!(queryParams.get("from") === null || queryParams.get("to") === null)) {
        return [queryParams.get("from"), queryParams.get("to")]
    }
    else{
        return [1800,2023]
    }
}

export function getRatingFilter(queryParams){
    // If the parameter is specified then return it else put the default value
    if (!(queryParams.get("min_rating") === null || queryParams.get("max_rating") === null)) {
        return [queryParams.get("min_rating"), queryParams.get("max_rating")]
    }
    else{
        return [0,5]
    }
}

export function getGenreFilter(queryParams, genres){
    
    // If the parameter is specified then return it else put the default value
    if (!(queryParams.get("genres") === null)) {

        // Map the string to an array of ints
        let selectedGenres = (queryParams.get("genres")).slice(1, -1).split(",").map(function(item) {
            return parseInt(item, 10);
        });
        // Map it to the values in the array with the genres
        return selectedGenres.map(i => genres[i-1])       
    }
    else{
        return []
    }
}

