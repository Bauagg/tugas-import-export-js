let stop = true
while (stop) {
    let name = prompt(`nama kamu siapa`)
    let repeat = validasi(name)
    if (!repeat) {
        stop = confirm('ulangi')
    } else {
        if (name) {
            alert(`nama saya adalah ${name}`)
            stop = false
        } else {
            alert(`nama harus di isi`)
        }
    }

}

function validasi(user) {
    if (Number(user)) {
        alert(`nama tidak boleh number`)
        return false
    }
    return true
}

export { stop, validasi };


