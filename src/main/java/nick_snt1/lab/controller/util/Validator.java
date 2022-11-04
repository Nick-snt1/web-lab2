package nick_snt1.lab.controller.util;

public class Validator {

    public static boolean validate(String x, String y, String r) {
        try {
            return !(Float.isNaN(Float.parseFloat(x)) || Float.isNaN(Float.parseFloat(y)) || Float.isNaN(Float.parseFloat(r)));
        } catch (NullPointerException | IllegalArgumentException ignored) {
            return false;
        }
    }
}
