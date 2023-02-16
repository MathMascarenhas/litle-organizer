import { Book } from "../../../../utils/types/types-request";


export function filterBooks(allBooks: Book[], filter: string){

    const filtered = allBooks.sort(function (a:Book, b:Book) {
        if(filter == "rate"){
        if (a.rate < b.rate) {
          return 1;
        }
        if (a.rate > b.rate) {
          return -1;
        }
        return 0;
    } else if(filter == "fewer_pages"){
        if (a.pages > b.pages) {
          return 1;
        }
        if (a.pages < b.pages) {
          return -1;
        }
        return 0;
    } else if(filter == "more_pages"){
        if (a.pages < b.pages) {
          return 1;
        }
        if (a.pages > b.pages) {
          return -1;
        }
        return 0;
    } else  {
        return 0
    }
    });
    return filtered
}


