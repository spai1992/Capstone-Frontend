# Lawtus
Lawtus is a comprehensive web platform designed to connect lawyers and users. Users can register, search for lawyers by description or city, view lawyer details, and request appointments. Lawyers receive appointment request notifications via email and can confirm appointments through a link. Both users and lawyers can manage their personal data and appointments through a personal dashboard.

#### The platform utilizes Angular for frontend development and Spring Boot for the backend, with PostgreSQL for data persistence.

## 🌟 Features
- User and lawyer registration and login
- Viewing and filtering registered lawyers
- Requesting and managing appointments
- Email notifications for appointment requests
- Dashboard for managing personal data and appointments
- Complete CRUD operations for users and lawyers
- Responsive design
- RESTful API endpoints
  
## ⌛ Prerequisites
- Node.js and npm
- Angular CLI
- Java 17 or higher (for backend)
- Maven 3.6.0 or higher (for backend)
- PostgreSQL


## 📄 Clone the Repository
For the Front-end:
- git clone https://github.com/spai1992/Capstone-Frontend.git

For the Back-end:
- git clone https://github.com/spai1992/Capstone-Backend.git


## 🛠️ Install Dependencies
To install the necessary dependencies for the Angular frontend, run:

```py
npm install
ng s
```

For the backend run:
```py
mvn clean install
mvn spring-boot:run
```

## 📦 Configure PostgreSQL
Create a database named backend and configure your application.properties file in the backend with your PostgreSQL credentials.

```py
spring.datasource.url=jdbc:postgresql://localhost:5432/tuxdatabase
spring.datasource.username=your_db_username
spring.datasource.password=your_db_password
spring.jpa.hibernate.ddl-auto=update
```


## 🚀 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## 🏆 Contact
For any inquiries or questions, please contact simone.giarnera@gmail.com
