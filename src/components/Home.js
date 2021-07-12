import React from 'react'
import image from '../nasa.jpg'

const Home = () => {
    return (
        <main>
            <img src={image} alt="Nebula" className="absolute bg-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-blue-500 font-bold cursive leading-none lg:leading-snug home-name">
                    Hey there, I am Ankit
                </h1>
            </section>
        </main>
    )
}

export default Home
