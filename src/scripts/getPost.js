// edc
import articleInfo from "@/article-info";

export function getPost(title, cb) {
    // fake an API request

    let post = articleInfo;        
        setTimeout(() => {
            if (post[title]) {
                cb(null, post[title])
            } else {
                cb(new Error('Post not found.'))
            }
        }, 100)
}