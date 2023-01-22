# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Family.create([
    {
        last_name: 'Patterson'
    }
])

Type.create([
    {
        pet_type: "Dog"
    },
    {
        pet_type: "Cat"
    },
    {
        pet_type: "Other"
    }
])

User.create([
    {
        username: "Test",
        password: "Test",
        name: "Test",
        family_id: 1
    },

])

Pet.create([
    {
        name: "Mochi",
        family_id: 1,
        pet_type_id: 1
    },
    {
        name: "Soba",
        family_id: 1,
        pet_type_id: 1
    }
])

PetUser.create([
    {
        user_id: 16,
        pet_id: 1
    }, 
    {
        user_id: 16,
        pet_id: 2
    }
])


