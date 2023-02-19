from mysql import connector


class Database():
    def connection(self):

        # Para exportar la conexión de la base de datos.
        db = connector.connect(
            host="localhost",
            user="root",
            password="",
            database="pfc",
        )
        db.autocommit = True
        return db
