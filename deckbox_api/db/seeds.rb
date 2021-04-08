puts "Seeding...."

Deckbox.destroy_all
User.destroy_all

u1 = User.create(name: "Ted", username: "teddy1", password: "test")
u2 = User.create(name: "Kona", username: "kona1", password: "kona")
u3 = User.create(name: "Craig", username: "craig1", password: "craig")

d1 = u1.deckboxes.create(card_name: "Blue Eyes White Dragon", quantity: 3, image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fyugioh%2Fimages%2F7%2F77%2FBlueEyesWhiteDragon-LCKC-EN-UR-1E.png%2Frevision%2Flatest%3Fcb%3D20180415030139&f=1&nofb=1", deck_name: 'the best')
d2 = u2.deckboxes.create(card_name: 'Asha', quantity: 4, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette3.wikia.nocookie.net%2Fcardfight%2Fimages%2Fb%2Fbb%2FPR-0496_%2528Sample%2529.png%2Frevision%2Flatest%3Fcb%3D20161226162350&f=1&nofb=1', deck_name: 'cardfight')
d3 = u3.deckboxes.create(card_name: 'Charizard', quantity: 1, image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fapptrigger.com%2Ffiles%2F2016%2F10%2FXY12_EN_11-1.jpg&f=1&nofb=1', deck_name: 'flaming char')

puts "Seeding complete..."