export default function photoContentValidator(item: any) {
    if (item.link === '') {
        return false
    } else {
        return true
    }
}