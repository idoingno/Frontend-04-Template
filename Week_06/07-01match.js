// 状态机

function match(string) {
    let state = start
    for (let c of string) {
        state = state(c)
    }
    return state === end
}


function start(c) {
    if (c === 'a') {
        return FoundA
    } else {
        return start
    }

}

function end() {
    return end
}

function FoundA(c) {
    if (c === 'b') {
        return FoundB
    } else {
        return start(c)
    }
}

function FoundB(c) {
    if (c === 'c') {
        return FoundC
    } else {
        return start(c)
    }
}

function FoundC(c) {
    if (c === 'd') {
        return end
    } else {
        return start(c)
    }
}

console.log(match('iiif abscdkks'))