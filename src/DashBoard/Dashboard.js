import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import PostList from '../PostList/PostList'
import axios from 'axios'
const Dashboard = () => {
        const [data, setData] = useState([]);
        useEffect(() => {
            const config = {
                headers: {
                    "x-access-token": localStorage.getItem("token")
                }
            }
            axios.get("http://localhost:8080/api/finance", config).then(res => {

                setData(res.data.finance)


            }).catch(err => {

                setData(err.response.message)
            })
        }, [])

        return ( <
            div > {
                data && data.map((item, i) => < Card key = { i }
                    item = { item }
                    / > )
                } <
                PostList postdata = { data } > < /PostList> < /
                div >
            )
        }

        export default Dashboard