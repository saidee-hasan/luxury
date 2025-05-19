# Car Doctor - Vehicle Service Management System

![Car Doctor Logo](assets/logo.png)

Car Doctor is a powerful vehicle service management system designed to streamline service bookings, maintenance tracking, and customer communications effectively. The platform includes dedicated user and admin interfaces to manage vehicle service requests efficiently.

## 🚀 Features

* **User Authentication and Authorization (JWT):** Secure login and registration.
* **Service Booking and Tracking:** Book service appointments and monitor progress.
* **Vehicle Maintenance History:** View past service records and maintenance logs.
* **Admin Dashboard:** Manage users, services, and appointments.
* **Responsive UI:** Fully optimized for mobile, tablet, and desktop screens.
* **Payment Integration (Optional):** Integrate payment gateways for service payments.

![Dashboard](assets/dashboard.png)

## 🛠️ Technologies Used

* **Frontend:** React.js, Tailwind CSS, Axios
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT
* **Testing:** Jest, Supertest

## 📦 Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/saidee-hasan/car-doctor.git
   cd car-doctor
   ```

2. **Install dependencies:**

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Environment Configuration:**

   Create a `.env` file in the `server` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the application:**

   ```bash
   cd server
   npm run dev
   ```

   In another terminal:

   ```bash
   cd client
   npm start
   ```

![Login Page](assets/login.png)

## 📚 API Endpoints

* **POST /api/auth/register:** Register a new user
* **POST /api/auth/login:** User login
* **GET /api/services:** Fetch all services
* **POST /api/services:** Create a new service (Admin only)
* **PUT /api/services/\:id:** Update service details (Admin only)
* **DELETE /api/services/\:id:** Delete a service (Admin only)

![Service Management](assets/services.png)

## ✅ Testing

Testing is implemented using Jest and Supertest. To run tests:

```bash
cd server
npm run test
```

## 📦 Deployment

* **Frontend:** Vercel - [Deployment Guide](https://vercel.com/docs)
* **Backend:** Render or Railway - [Deployment Guide](https://render.com/docs)

## 📄 License

This project is licensed under the MIT License.

![Thank You](assets/thank-you.png)
