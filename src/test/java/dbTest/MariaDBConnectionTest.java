/*
package dbTest;

import org.junit.Test;

import java.sql.Connection;
import java.sql.DriverManager;

// MariaDB 연결 확인 테스트
public class MariaDBConnectionTest {
    // MySQL Connector 의 클래스. DB 연결 드라이버 정의
    private static final String DRIVER = "org.mariadb.jdbc.Driver";
    // DB 경로
    private static final String URL = "jdbc:mariadb://localhost:3306/okBoard";
    private static final String USER = "root";
    private static final String PASSWORD = "0000";

    @Test
    public void testConnection() throws Exception {
        Class.forName(DRIVER);
        try {
            Connection connection = DriverManager.getConnection(URL, USER, PASSWORD);
            System.out.println(connection);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
*/
