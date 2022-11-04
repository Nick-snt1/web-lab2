package nick_snt1.lab.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import nick_snt1.lab.model.TableHandler;

@WebServlet(name = "GetTableServlet", value = "/get_table_servlet")
public class GetTableServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write(TableHandler.getTable(req.getSession()));
    }
}