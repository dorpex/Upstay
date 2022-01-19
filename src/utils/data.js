// set the inputs you want to render here :)
// @data : array of objects(inputs)
// @inputs : object({name,type,options - for types select and radio, error(args - value) - function to execute for checking custom errors (not require)})
// allowed input types : text, date, radio - options are required, select - options are required
const data = [
    {
        type : 'date',
        name : 'תאריך'
      },
      {
        type : 'radio',
        options : [1,2,3,4],
        name : 'מספר אורחים',
      },
      {
        type : 'select',
        options : [
          'סוויטה',
          'חדר זוגי עם ילדים',
          'חדר זוגי',
          'חדר ליחיד'
        ],
        name : 'סוג החדר'
      },
      {
        type : 'text',
        name : 'הערות',
        error : (value) => {
            if (value?.length > 3) return alert(`הערה יכולה להיות עד 3 אותיות`)
        }
      },
]
export default data