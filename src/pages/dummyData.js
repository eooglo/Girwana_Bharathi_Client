
const datas = [
    {
        id : 1,
        category : 'papers',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '122',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 2,
        category : 'conferencepresentation',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '132',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 3,
        category : 'papers',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '12',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 4,
        category : 'conferencepresentation',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '172',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 5,
        category : 'conferencepresentation',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '152',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 6,
        category : 'papers',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '412',
        imageUrl : './gir_document_image.png'
    },

    {
        id : 7,
        category : 'papers',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '312',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 8,
        category : 'conferencepresentation',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '2',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 9,
        category : 'conferencepresentation',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '12',
        imageUrl : './gir_document_image.png'
    },
    {
        id : 10,
        category : 'papers',
        header : 'ಆಧುನಿಕ ಅಧ್ಯಯನ ಪದ್ದತಿಯಲ್ಲಿ ಕನಕದಾಸರ ಸಾಹಿತ್ಯ ವಿಶಿಷ್ಟಾತ್ಮಕ ಅಧ್ಯಯನ',
        body : 'ಸುಮಾರು ಎರಡು ಸಾವಿರ ವರ್ಷಗಳ ಇತಿಹಾಸ ಹೊಂದಿರುವ ನಮ್ಮ ಕನ್ನಡ ಭಾಷೆಯು ಅತೀ ಶ್ರೀಮಂತವೂ, ಬಹು ವಿಚಾರ ಆಗರವೂ, ದಾಸ ಶರ... ',
        reviewCount : '102',
        imageUrl : './gir_document_image.png'
    }
]

export default datas;