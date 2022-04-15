package com.project.Project.controllers;

import com.project.Project.dao.UserDao;
import com.project.Project.models.User;
import com.project.Project.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UserDao userDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody User user) {

        User loggedUser = userDao.getUserWithCredentials(user);
        if (loggedUser != null) {
            String jwtToken = jwtUtil.create(String.valueOf(loggedUser.getId()), loggedUser.getEmail());
            return jwtToken;
        }
        return "FAIL";

    }
}
