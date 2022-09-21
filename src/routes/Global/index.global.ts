
import express from 'express'
import LoginGlobalRoute from './Login.global'


const GlobalRouter =  express.Router()


GlobalRouter.post("/login",LoginGlobalRoute)


export default GlobalRouter

