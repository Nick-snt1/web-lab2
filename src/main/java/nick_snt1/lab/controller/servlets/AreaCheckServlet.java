package nick_snt1.lab.controller.servlets;

import java.io.IOException;
import java.text.SimpleDateFormat;

import java.util.Date;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import nick_snt1.lab.controller.util.*;
import nick_snt1.lab.model.TableHandler;

@WebServlet(name = "AreaCheckServlet", value = "/area_check_servlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException , IOException {
        long startTime = System.nanoTime();

        String x = req.getParameter("x"), y = req.getParameter("y"), r = req.getParameter("r");

        if (!Validator.validate(x, y, r)) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("Something went wrong with parameters!");
        } else {
            Map<String, String> row = Map.of(
                "x", x, "y", y, "r", r, 
                "hit", AreaChecker.isHit(x, y, r) ? "Hit" : "Miss", 
                "curtime", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()) ,
                "exectime", "" + (System.nanoTime() - startTime) / 1000000.0f
            );

            TableHandler.addRow(row, req.getSession());
            resp.getWriter().write(new JSONObject(row).toString());
        }

        
    }
}
