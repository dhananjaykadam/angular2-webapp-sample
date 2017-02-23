export class ServerConstants {
    public static DOMAIN = "http://localhost/";
    public static APP_NAME = "sevenforall/";
    // public static PORT = "80/";
    public static APP_URL = ServerConstants.DOMAIN + ServerConstants.APP_NAME;
    public static ID = "id/";

    public static LOGIN_CUSTOMER = ServerConstants.APP_URL + "login/customers/";
    public static LOGIN_PROVIDER = ServerConstants.APP_URL + "login/providers/";

    public static SPACE_PROVIDERS = ServerConstants.APP_URL + "spaceproviders/";
    public static SPACE_PROVIDERS_BY_SPACE = ServerConstants.SPACE_PROVIDERS + "space/";
    public static SPACES = ServerConstants.APP_URL + "spaces/";
    public static SPACES_LIST = ServerConstants.SPACES + "list/";
    public static FOOD_SPACES = ServerConstants.SPACES + "foodspace/";
    public static FOOD_SPACE_PREFERENCES = "/preferences/";
    public static FOOD_SPACE_BY_SPACE_ID = ServerConstants.FOOD_SPACES + "by-space-id/";
    public static SPACES_UPLOAD_SPACE_PHOTOS = ServerConstants.SPACES;
    public static SPACE_GET_IMAGES = ServerConstants.SPACES;

    public static COMBOS_FOR_SPACE = ServerConstants.APP_URL + "spaces/";

    public static ORDERS = ServerConstants.APP_URL + "orders/";
    public static ORDERS_SPACES = ServerConstants.ORDERS + "spaces/"


    public static PROFILE = ServerConstants.APP_URL + "profiles/";
    public static PROFILE_CUSTOMER = ServerConstants.PROFILE + "customers/";
    public static PROFILE_CUSTOMER_BY_USER_ID = ServerConstants.PROFILE_CUSTOMER + "user/";


    public static STAFF = ServerConstants.APP_URL + "staff/";
    public static STAFF_BY_SPACE = ServerConstants.STAFF + "spaces/";
    public static STAFF_FOOD_SPACE = ServerConstants.STAFF_BY_SPACE + "foodspace/";

    public static ADDRESS = ServerConstants.APP_URL + "address/";
    public static ADDRESS_SPACE_LOCATION = ServerConstants.ADDRESS + "space/"

    public static CONTACT_US = ServerConstants.APP_URL + "contactus/";
    public static REGISTRATION_REQUESTS = ServerConstants.CONTACT_US + "registration-requests/";

    public static HELP = ServerConstants.APP_URL + "help/";
    public static ACCOUNT_RECOVERY_PASSWORD_EMAIL = ServerConstants.HELP + "passwords/recover/initiate/email";
    public static ACCOUNT_RECOVERY_PASSWORD_USERNAME = ServerConstants.HELP + "passwords/recover/initiate/username";
    public static ACCOUNT_RECOVERY_PASSWORD_RESET_BY_EMAIL_KEY = ServerConstants.HELP + "passwords/recover/reset/email/secretkey";

    public static FILES = ServerConstants.APP_URL + "files/";
    public static FILES_IMAGES = ServerConstants.FILES + "images/";
    public static FILES_IMAGES_SPACE = ServerConstants.FILES_IMAGES + "spaces/";
    public static FILES_IMAGES_PROFILE = ServerConstants.FILES_IMAGES + "profile/";

    public static TAXATION = ServerConstants.APP_URL + "taxation/";
    public static SPACE_TAXATION = ServerConstants.TAXATION + "spaces/";

    public static TAXATION_COMBO_CUSTOMER_PRICE = ServerConstants.SPACE_TAXATION;

    public static USERS = ServerConstants.APP_URL + "users/";
    public static USER_ACTIONS = ServerConstants.USERS + "actions/";
}
