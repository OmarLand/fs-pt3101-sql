const db = require('../configs/db')
const { sql } = require('slonik')

module.exports = {
    // Your movies queries
    async q9() {
        // README - Movies.9
        return await db.query(sql`
            SELECT title FROM movies 
            WHERE title IS NOT null
        `)

    },

    async q10() {
        // README - Movies.10
        return await db.query(sql`
            SELECT title, mpaa_rating
            FROM movies
            WHERE mpaa_rating IS NOT NULL
        `)
    },

    async q11() {
        // README - Movies.11
        return await db.query(sql`
            SELECT title, production_budget, distributor
            FROM movies
            WHERE production_budget < 500000
            ORDER BY production_budget ASC
        `)
    },

    async q12() {
        // README - Movies.12
        return await db.query(sql`
            SELECT title, major_genre, production_budget
            FROM movies
            WHERE production_budget IS NOT NULL
            ORDER BY production_budget DESC
            LIMIT 10           
        `)
    },

    async q13() {
        // README - Movies.13
        return await db.query(sql`
            SELECT title, source 
            FROM movies
            WHERE source = 'Remake'
        `)
    },

    async q14() {
        // README - Movies.14
        // return await db.query(sql`
            
        // `)
    },

    async q15() {
        // README - Movies.15
        // return await db.query(sql`
        
        // `)
    },

    async q16() {
        // README - Movies.16
        // return await db.query(sql`
        
        // `)
    },

    async q17() {
        // README - Movies.17
        // return await db.query(sql`
        
        // `)
    },

    async q18() {
        // README - Movies.18
    },

    async q19() {
        // README - Movies.19
    },

    async q20() {
        // README - Movies.20
    },

    async q21() {
        // README - Movies.21
    },

    async q22() {
        // README - Movies.22
    },

    async q23() {
        // README - Movies.23
    },
}