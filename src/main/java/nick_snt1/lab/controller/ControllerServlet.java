package nick_snt1.lab.controller;

import java.util.*;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "ControllerSevlet", value = "/controller_servlet")
public class ControllerServlet extends HttpServlet {

    @Override
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException , IOException {
        if ( Arrays.stream(new String[]{req.getParameter("x"), req.getParameter("y"), req.getParameter("r")}).allMatch(x -> x != null) )
            getServletContext().getNamedDispatcher("AreaCheckServlet").forward(req, resp);
        else if (req.getParameter("get_table") != null)
            getServletContext().getNamedDispatcher("GetTableServlet").forward(req, resp);
        else if (req.getParameter("clear_table") != null)
            getServletContext().getNamedDispatcher("ClearTableServlet").forward(req, resp);
    }
}