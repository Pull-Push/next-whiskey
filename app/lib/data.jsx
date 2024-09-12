'use client'
import { useState, useEffect } from "react";

export async function getServerSideTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() =>{
        const fetchTodos = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
    };
    fetchTodos();
    }, []);
}