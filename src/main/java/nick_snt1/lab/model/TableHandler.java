package nick_snt1.lab.model;

import java.util.Map;

import javax.servlet.http.HttpSession;

import org.json.JSONObject;

public class TableHandler {

    private static final String TABLE_NAME = "table";    

    public static void addRow(Map<String, String> row, HttpSession session) {
        JSONObject jo = getTableFromSession(session);
        jo.put("" + jo.length(), new JSONObject(row).toString());
        session.setAttribute(TABLE_NAME, jo);
    }

    public static void clearTable(HttpSession session) {
        session.setAttribute(TABLE_NAME, null);
    }

    public static String getTable(HttpSession session) {
        return getTableFromSession(session).toString();
    }

    private static JSONObject getTableFromSession(HttpSession session) {
        JSONObject jo = (JSONObject) session.getAttribute(TABLE_NAME);
        if (jo == null) jo = new JSONObject();
        return jo;
    }
}
