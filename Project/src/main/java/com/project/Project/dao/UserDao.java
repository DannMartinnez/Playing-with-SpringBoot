package com.project.Project.dao;

import com.project.Project.models.User;

import java.util.List;

public interface UserDao {

    List<User> getUsers();

    void deleteUser(Long id);

    void userRegister(User user);

    User getUserWithCredentials(User user);
}
