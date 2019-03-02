/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package zapchemtutorials.controller;

import java.io.File;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 *
 * @author Harshit-Rathore
 */
@WebListener
public class UploadDestination implements ServletContextListener{
    private static Connection conn;
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        try
        {
            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("Driver successfully loaded");
            conn=DriverManager.getConnection("jdbc:mysql://localhost/study_villa","root","scott");
            System.out.println("Connection Established.");
        }
        catch(Exception ex){
            System.out.println("Exception In Opening Connection In DBConnection:"+ex);
        }
    }
    public static Connection getConnection(){
        return conn;
    }
    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        try{
            conn.close();
        }
        catch(Exception ex){
            System.out.println("Exception In Closing Connection In DBConnection:"+ex);
        }
    }
}
