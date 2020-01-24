
module.exports = {
    filterByDate: (item, date) => {
        let year, month

        if(date) {
             year = parseInt(date.split("-")[0])
             month = parseInt(date.split("-")[1])
        } else {
             year = new Date().getFullYear()
             month = new Date().getMonth() + 1
        }
        return item.filter(
            (item) => {
                return (item.year == year) && (item.month == month)
            }
        )
    } 
}