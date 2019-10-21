<?php




//defined('BASEPATH') or exit('No se permite acceso directo');

/**
* Clase de la Base de datos y conexión
*/
class DataBase {
	
	private $_dbUser;


	private $_dbPassword;


	private $_dbHost;


	protected $_dbName;


	public $_connection;


    private static $_instance;


  	public function __construct() {

        
        try {
            $this->_dbHost =HOST;
            $this->_dbUser =USER;
            $this->_dbPassword =PASSWORD;
            $this->_dbName=DB_NAME;

            $this->_connection = new \PDO('mysql:host='.$this->_dbHost.'; dbname='.$this->_dbName, $this->_dbUser, $this->_dbPassword);
            $this->_connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            $this->_connection->exec("SET CHARACTER SET utf8");

            print("conexion ok ");
        } catch (PDOException $e) {
            print ("Error!: ". $e );
            die();
        }
    }
    

    public function prepare($sql) {
        return $this->_connection->prepare($sql);
    }


     public static function instance() {
         if (!isset(self::$_instance))
         {
             $class = __CLASS__;
             self::$_instance = new $class;
         }
         return self::$_instance;
     }

   
	
	 

	 public function insert($sentencia){

	 	$stm = $this->_connection->prepare($sentencia);
	 	$stm->execute();

	 	$id= $this->_connection->lastInsertId();
		
	 	return $id;
		


	 }
}


?>