# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doctor.create(first_name: "Donald", last_name: "Duck", zip_code: "11234", specialty: "Pulmonology")
Doctor.create(first_name: "Mickey", last_name: "Mouse", zip_code: "10029", specialty: "Cardiology")
Doctor.create(first_name: "Scooby", last_name: "Doo", zip_code: "12181", specialty: "Podiatry")

Patient.create(first_name: "Pam", last_name: "Beesly", diagnosis: "Allergies", born_on: Date.new(1979, 3, 25), doctor_id: 1 )
Patient.create(first_name: "Lorelai", last_name: "Gilmore", diagnosis: "Athsma", born_on: Date.new(1968, 4, 25), doctor_id: 1 )
Patient.create(first_name: "Gordon", last_name: "Ramsay", diagnosis: "Heart Murmer", born_on: Date.new(1966, 11, 8), doctor_id: 2 )
Patient.create(first_name: "Harry", last_name: "Potter", diagnosis: "Pulmonary Embolism", born_on: Date.new(1980, 7, 31), doctor_id: 2 )
Patient.create(first_name: "Elle", last_name: "Woods", diagnosis: "Broken Toe", born_on: Date.new(1988, 5, 21), doctor_id: 3 )
Patient.create(first_name: "Sheldon", last_name: "Cooper", diagnosis: "Bunions", born_on: Date.new(1980, 2, 12), doctor_id: 3 )
