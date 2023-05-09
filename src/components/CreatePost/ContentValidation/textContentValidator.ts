export default function textContentValidator(item: any) {
    if (item.body === '') {
        return false
    } else if (item.title === '') {
        return false
    } else {
        return true
    }
}