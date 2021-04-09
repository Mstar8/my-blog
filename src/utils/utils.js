// 滚动条高度
export const getScrollTop = () => {
    let bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
    }
    return (documentScrollTop - bodyScrollTop) > 0 ? documentScrollTop : bodyScrollTop;
}
