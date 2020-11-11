


function match(selector, element) {

    // 分割class
    const arr = selector.split(' ')

    for (const e of arr) {
        // 正则匹配 返回一个或多个正则表达式的匹配
        e.match(
            /^([\w]+)?((?:.[\w]+)|(?:#[\w]+))?((?:.[\w]+)|(?:#[\w]+))?$/
        );
        const parts = [RegExp.$1, RegExp.$2, RegExp.$3];
        if (!matchSelector(parts, element)) {
            return false;
        }

        element = element.parentElement;
    }

    return true;
}

function matchSelector(parts, element) {
    if (!parts || !element) {
        return false;
    }

    for (const part of parts) {
        if (!part) continue;
        if (part.startsWith('.')) {
            const className = part.replace('.', '');
            if (
                !(
                    element.getAttribute('class') !== null &&
                    element.getAttribute('class').trim().split(' ').includes(className)
                )
            )
                return false;
        } else if (part.startsWith('#')) {
            const id = part.replace('#', '');
            if (
                !(
                    element.getAttribute('id') !== null &&
                    element.getAttribute('id').trim() == id
                )
            )
                return false;
        } else {
            if (element.tagName !== part.toUpperCase()) return false;
        }
    }
    return true;
}


const result = match('div#id.abc', document.getElementById('id'));
console.log(result);