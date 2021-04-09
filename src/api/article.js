import { get } from "../utils/axios";

export function getArticles() {
    let url = "/article/list"
    return get(url,null);
}