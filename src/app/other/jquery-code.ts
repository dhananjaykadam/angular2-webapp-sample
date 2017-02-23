export class JqueryCode {

    public static SelectBox() {
        // let a: any = $('select');
        // a.material_select();
    }

    public static DateTimePicker() {
        let dp: any = $('.datepicker');
        dp.pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 30,
            format: 'dd/mm/yyyy'
        });
        let tp: any = $('.timepicker');

        tp.pickatime({
            default: 'now',
            twelvehour: true, // change to 12 hour AM/PM clock from 24 hour
            donetext: 'OK',
        });
    }
}
