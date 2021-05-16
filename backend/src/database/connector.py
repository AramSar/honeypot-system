import pymysql
from src.config import DB_HOST, DB_PASSWORD, DB_USER

class User:
    def __init__(self):
        self.connection = pymysql.connect(host=DB_HOST,
                                          user=DB_USER,
                                          password=DB_PASSWORD,
                                          database='User',
                                          cursorclass=pymysql.cursors.DictCursor)

    def insert(self, username, fname, lname):
        with self.connection.cursor() as cursor:
            sql = "INSERT INTO `users` (`username`, `fname`, `lname`) VALUES (%s, %s, %s)"
            cursor.execute(sql, (username, fname, lname))
            self.connection.commit()

    def getByUsername(self, username):
        with self.connection.cursor() as cursor:
            # Concatenation should be avoided, since it can cause an SQL vulnerability
            sql = "SELECT id, fname, lname FROM users WHERE username=" + f"'{username}'"
            cursor.execute(sql)
            result = cursor.fetchone()
            return result


if __name__ == '__main__':
    # Run this file to insert some entries into the DB
    user = User()
    user.insert("jam", "James", "Brown")
    user.insert("Joan", "Joanna", "Black")
