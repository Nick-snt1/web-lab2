package nick_snt1.lab.controller.util;

public class AreaChecker {

    private static boolean hitTriangle(Float x, Float y, Float r) {
        return x >= 0 && y <= 0 && x + Math.abs(y) <= r/2;
    }

    private static boolean hitSquare(Float x, Float y, Float r) {
        return x >= 0 && y >= 0 &&  x <= r && y <= r/2;
    }

    private static boolean hitCircle(Float x, Float y, Float r) {
        return x <= 0 && y >= 0 && Math.sqrt(Math.pow(x, 2)+ Math.pow(y, 2)) <= r;
    }

    public static boolean isHit(String xs, String ys, String rs) {
        Float x, y, r;
        try {
            x = Float.parseFloat(xs); y = Float.parseFloat(ys); r = Float.parseFloat(rs);
            return hitCircle(x, y, r) || hitSquare(x, y, r) || hitTriangle(x, y, r);
        } catch (Exception ignored) { return false; }
        
    }
}
