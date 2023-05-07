import photoContentValidator from "./photoContentValidator";
import textContentValidator from "./textContentValidator";
import videoContentValidator from "./videoContentValidator";

export default function contentValidationFactory(content: any) {
    switch(content.content.type) {
        case 'textContent':
            return textContentValidator(content.content)
        case 'videoContent':
            return videoContentValidator(content.content)
        case 'photoContent':
            return photoContentValidator(content.content)
    }
}