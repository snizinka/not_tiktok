export default function videoContentValidator(item: any) {
    if (item.link === '') {
        return false
    } else {
        return true
    }
}