export class Dialogs {
    public static toast(contents: string, timeout: number) {
        eval("Materialize.toast(contents, timeout)");
    }
}
