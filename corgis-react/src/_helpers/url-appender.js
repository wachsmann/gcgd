export function urlAppender(path) {
    

    if (path) {
        return 'http://localhost:8080/Corgis/api'+path;
    } else {
        return null;
    }
}