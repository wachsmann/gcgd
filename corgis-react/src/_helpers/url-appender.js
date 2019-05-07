export function urlAppender(path) {
    

    if (path) {
        return 'http://localhost:8081/api/v1'+path;
    } else {
        return null;
    }
}