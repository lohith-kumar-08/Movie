import {configureStore} from '@reduxjs/toolkit'
import movieslice from './movieslice'

const Moviestore=configureStore({
     reducer:{
       movies: movieslice.reducer,
     }
})

export default Moviestore;