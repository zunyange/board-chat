import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Main from "./pages/main/Main";
import Chat from "@src/components/chat/Chat";
import ChatRoom from "@src/components/chat/ChatRoom";

const Router = () => {
    const [userEmail, setUserEmail] = useState(
        localStorage.getItem("userEmail") || "",
    );

    const clearUserEmail = () => {
        setUserEmail(""); // Reset the email state
    };

    return (
        <BrowserRouter>
            <Nav email={userEmail} onLogout={clearUserEmail} />
            <Routes>
                <Route path="/" element={<Login setUserEmail={setUserEmail} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/boards" element={<Main email={userEmail} />} />
                <Route path="/boards/:id" element={<Main />} />
                <Route path="/chat/rooms" element={<Chat />} />
                <Route path="/chat/rooms/:id" element={<ChatRoom />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
