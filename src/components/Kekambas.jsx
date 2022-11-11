import React, { useState, useEffect } from 'react'

export default function Kekambas(props) {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("https://kekambas-bs.herokuapp.com/kekambas")
            .then(res => res.json())
            .then(data => {
                setStudents(data);
            })
    }, [])


}
