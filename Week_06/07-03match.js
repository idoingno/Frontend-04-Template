function match(string) {
    let state = start
    for (const c of string) {
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
    return end;
}


function FoundA(c) {
    if (c === 'b') {
        return FoundB
    } else {
        return start(c)
    }
}

function FoundB(c) {
    if (c === 'a') {
        return FoundA2
    } else {
        return start(c)
    }
}

function FoundA2(c) {
    if (c === 'b') {
        return FoundB2
    } else {
        return start(c)
    }
}

function FoundB2(c) {
    if (c === 'a') {
        return FoundA3
    } else {
        return FoundB(c)
    }
}

function FoundA3(c) {
    if (c === 'b') {
        return FoundB3
    } else {
        return FoundA(c)
    }
}


function FoundB3(c) {
    if (c === 'x') {
        return end
    } else {
        return FoundB(c)
    }
}



console.log(match('i iabababxkk'))