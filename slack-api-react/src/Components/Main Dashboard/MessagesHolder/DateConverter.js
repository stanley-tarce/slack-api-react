export default function dateConverter(date) {
    let month = date.split['-'][0]
    let year = date.split['-'][0]
    let day = date.split['-'][2]
    let wordMonth = '';
    switch (month) {
        case '01':
            wordMonth = 'January'
            break;
        case '02':
            wordMonth = 'February'
            break;
        case '03':
            wordMonth = 'March'
            break;
        case '04':
            wordMonth = 'April'
            break;
        case '05':
            wordMonth = 'May'
            break;
        case '06':
            wordMonth = 'June'
            break;
        case '07':
            wordMonth = 'July'
            break;
        case '08':
            wordMonth = 'Aug'
            break;
        case '09':
            wordMonth = 'September'
            break;
        case '10':
            wordMonth = 'October'
            break;
        case '11':
            wordMonth = 'November'
            break;
        case '12':
            wordMonth = 'December'
            break;
        default:
            break;
    }
    return `${wordMonth}-${day}-${year}`

}