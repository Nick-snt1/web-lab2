package nick_snt1.lab.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "AreaCheckServlet", value = "/area_check_servlet")
public class AreaCheckServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException , IOException {
        resp.getWriter().write("Method write in AreaCheckServlet after click forwarded from controller");
    }
}
